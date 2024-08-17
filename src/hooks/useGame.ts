import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { GamesProps } from "../Entities/GamesProps";

const { getGame } = new APIclient<GamesProps>("games");

const GetGame = (slug: string) =>
  useQuery({
    queryKey: ["Games", slug],
    queryFn: () => getGame(slug),
  });

export default GetGame;
