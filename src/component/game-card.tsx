import { GamesProps } from "../hooks/useGames";

interface Props {
  results: GamesProps;
}

const GameCard = ({ results }: Props) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 cursor-pointer rounded-lg shadow-md overflow-hidden">
        <img
          src={results.background_image}
          alt={results.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {results.name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default GameCard;
