import { useState, useEffect } from "react";
import { api } from "./axios";
// import {BASE_URL} from '@env'
import { useAuth } from "../context/AuthContext";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authState } = useAuth();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response =  await api.get(endpoint)
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("error",error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authState]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
