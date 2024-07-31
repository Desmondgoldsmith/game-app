import { UseGames } from "../hooks/useGames";
import { GenreProps } from "../hooks/useGenre";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";

interface Props {
  selectedGenre: GenreProps | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = UseGames(selectedGenre);
  const chunks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <p>error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {isLoading === true
          ? chunks.map((chunk) => <GameCardSkeleton key={chunk} />)
          : ""}
        {data.map((game) => (
          <GameCard key={game.id} results={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
