import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponseData<T> {
  count: number;
  next: string | null;
  results: T[];
}

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "35aa67b93d0f42bcb86f842b5ffac53f",
  },
});

export default class APIclient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return AxiosInstance.get<FetchResponseData<T>>(this.endpoint, config).then(
      (res) => res.data
    );
  };

  getGame = (id: string | number) => {
    return AxiosInstance.get<T>(this.endpoint + "/" + id).then(
      (res) => res.data
    );
  };
}
