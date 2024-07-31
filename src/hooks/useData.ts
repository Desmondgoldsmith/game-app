import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponseData<T> {
  count: number;
  results: T[];
}
const UseData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  // @ts-expect-error
  deps?: any[]
) => {
  const [data, setdata] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get<FetchResponseData<T>>(endpoint, { ...requestConfig })
        .then((res) => {
          setdata(res.data.results), setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    },
    deps ? [...deps] : []
  );
  return { data, isLoading, error };
};

export default UseData;
