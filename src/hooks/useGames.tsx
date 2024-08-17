import { useInfiniteQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { FetchResponseData } from "../Entities/FetchResponseData";
import { GameQuery } from "../store";
import { GamesProps } from "../Entities/GamesProps";

const apiClient = new APIclient<GamesProps>("/games");
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
