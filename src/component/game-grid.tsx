import { UseGames } from "../hooks/useGames";
import GameCard from "./game-card";

const GameGrid = () => {
  const { games, error } = UseGames();
  return (
    <>
      {error && <p>error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {games.map((game) => (
          <GameCard key={game.id} results={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
