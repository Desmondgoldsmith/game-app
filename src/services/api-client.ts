import axios, { AxiosRequestConfig } from "axios";
import { FetchResponseData } from "../Entities/FetchResponseData";

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
    try {
      return AxiosInstance.get<T>(this.endpoint + "/" + id).then(
        (res) => res.data
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}
