import UseData from "./useData";
import { GenreProps } from "./useGenre";

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

export const UseGames = (selectedGenre: GenreProps | null) =>
  UseData<GamesProps>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
