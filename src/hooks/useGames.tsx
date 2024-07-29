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

export const UseGames = () => UseData<GamesProps>("/games");
