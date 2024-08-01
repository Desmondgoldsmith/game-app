import { GameQuery } from "../App";
import UseData from "./useData";

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

export interface FetchGamesResponse {
  count: number;
  results: GamesProps[];
}

export const UseGames = (gameQuery: GameQuery | null) =>
  UseData<GamesProps>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
      },
    },
    [gameQuery]
  );
