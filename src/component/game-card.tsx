import { Link } from "react-router-dom";
import { GamesProps } from "../hooks/useGames";
import GetSizedImages from "../services/image-url";
import CriticScore from "./critic-score";
import PlatformIconList from "./platform-icon-list";

interface Props {
  results: GamesProps;
}

const GameCard = ({ results }: Props) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 cursor-pointer rounded-lg shadow-md overflow-hidden">
        <img
          src={GetSizedImages(results.background_image)}
          alt={results.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex justify-between items-center">
          <div>
            <Link to={`games/` + results.slug}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {results.name}
              </h2>
            </Link>
            <PlatformIconList
              platforms={results.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
          </div>
          <CriticScore score={results.metacritic} />
        </div>
      </div>
    </>
  );
};

export default GameCard;
