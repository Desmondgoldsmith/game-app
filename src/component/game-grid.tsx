import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface GamesProps {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: GamesProps[];
}

const GameGrid = () => {
  const [games, setGames] = useState<GamesProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <p>error: {error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
