import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Screenshots } from "../Entities/Screenshots";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIclient<Screenshots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: () => apiClient.getAll,
  });
};

export default useScreenshots;
