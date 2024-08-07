import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

const apiClient = new APIclient<GenreProps>("/genres");
export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
}

export const UseGenre = () =>
  useQuery({
    queryKey: ["Genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
