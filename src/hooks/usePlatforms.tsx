import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponseData } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponseData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
