import { Platform } from "./Platform";

export interface GamesProps {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface FetchGamesResponse {
  count: number;
  results: GamesProps[];
}
