import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponseData } from "./useData";

export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
}

export const UseGenre = () =>
  useQuery({
    queryKey: ["Genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponseData<GenreProps>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
