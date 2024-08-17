import { GenreProps } from "../hooks/useGenre";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";

export interface GamesProps {
  id: number;
  name: string;
  slug: string;
  publishers: Publishers[];
  genres: GenreProps[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface FetchGamesResponse {
  count: number;
  results: GamesProps[];
}
