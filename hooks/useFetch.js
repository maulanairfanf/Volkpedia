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
    console.log('fetchData')
    setIsLoading(true);
    try {
      const response =  await api.get(endpoint)
      console.log('response', response)
      setData(response.data.data);
    } catch (error) {
      setError(error);
      console.log("error",error)
      setData([])
      throw error
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
