import { UseGenre } from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import GameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = UseGenre();
  const gameQuery = GameQueryStore((s) => s.gameQuery);
  const platform = usePlatform(gameQuery.platformId);

  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const dynamicHeader = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold">
      {dynamicHeader}
    </h1>
  );
};

export default GameHeading;
