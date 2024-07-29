import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface GamesProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: GamesProps[];
}

export const UseGames = () => {
  const [games, setGames] = useState<GamesProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const controller = AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games") // , { signal: controller.signal
      .then((res) => {
        setGames(res.data.results), setIsLoading(false);
      })
      .catch((error) => setError(error.message));

    // return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};
