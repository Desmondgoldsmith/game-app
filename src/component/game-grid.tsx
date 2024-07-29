import { UseGames } from "../hooks/useGames";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";

const GameGrid = () => {
  const { games, error, isLoading } = UseGames();
  const chunks = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {isLoading === true
          ? chunks.map((chunk) => <GameCardSkeleton key={chunk} />)
          : ""}
        {games.map((game) => (
          <GameCard key={game.id} results={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
