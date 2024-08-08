import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIclient, { FetchResponseData } from "../services/api-client";

const apiClient = new APIclient<GamesProps>("/games");
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
  useInfiniteQuery<FetchResponseData<GamesProps>, Error>({
    queryKey: ["Games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchValue,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
