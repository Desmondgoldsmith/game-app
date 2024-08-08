import { GameQuery } from "../App";
import { UseGenre } from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = UseGenre();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const dynamicHeader = `${gameQuery.platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <>
      <h1 className="text-[36px] font-mono font-bold">{dynamicHeader}</h1>
    </>
  );
};

export default GameHeading;
