import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GamesProps {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: GamesProps[];
}

export const UseGames = () => {
  const [games, setGames] = useState<GamesProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // const controller = AbortController();
    apiClient
      .get<FetchGamesResponse>("/games") // , { signal: controller.signal
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));

    // return () => controller.abort();
  }, []);
  return { games, error };
};
