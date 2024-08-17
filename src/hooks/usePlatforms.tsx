import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Platform } from "../Entities/Platform";

const useClient = new APIclient<Platform>("/platforms/lists/parents");
export const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: useClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
