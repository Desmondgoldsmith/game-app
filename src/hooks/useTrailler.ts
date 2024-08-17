import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Trailler } from "../Entities/Trailler";

const UseTrailler = (gameId: number) => {
  const apiClient = new APIclient<Trailler>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};
export default UseTrailler;
