import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponseData<T> {
  count: number;
  results: T[];
}
const UseData = <T>(endpoint: string) => {
  const [data, setdata] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponseData<T>>(endpoint)
      .then((res) => {
        setdata(res.data.results), setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [endpoint]);
  return { data, isLoading, error };
};

export default UseData;
