import { UseGames } from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = UseGames();
  return (
    <>
      {error && <p>error: {error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
