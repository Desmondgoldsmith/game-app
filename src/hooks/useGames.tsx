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

<<<<<<< HEAD
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
=======
export const UseGames = (
  selectedGenre: GenreProps | null,
  selectedPlatform: Platform | null
) =>
  UseData<GamesProps>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
>>>>>>> eb89316ca5336b61dd5737058e96e60fcf7db690
  );
