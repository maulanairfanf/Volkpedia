import { useState, useEffect } from "react";
import { api } from "./axios";
// import {BASE_URL} from '@env'

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response =  await api.get(endpoint)
      console.log('response', response.data)
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
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
