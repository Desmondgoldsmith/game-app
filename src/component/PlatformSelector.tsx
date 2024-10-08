import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { usePlatforms } from "../hooks/usePlatforms";
import GameQueryStore from "../store";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  // usePlatform is a function that accepts the platformId and returns the data that matches the given platformId
  const platformId = GameQueryStore((s) => s.gameQuery.platformId);
  const platformData = usePlatform(platformId);
  const selectedPlatform = GameQueryStore((s) => s.setPlatformId);
  const [isOpen, setIsOpen] = useState(false);

  if (error) return null;
  //   if (isLoading) return <p>Loading platforms...</p>;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium dark:bg-gray-700 dark:focus:ring-blue-400 dark:text-white dark:border dark:border-gray-700 dark:hover:bg-gray-600 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span>{platformId ? platformData?.name : "Platforms"}</span>
        <BsChevronDown
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 dark:bg-gray-700 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            {platforms?.results.map((platformx) => (
              <li
                key={platformx.id}
                className={`px-4 py-2 text-sm text-gray-700 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer`}
                onClick={() => selectedPlatform(platformx.id)}
              >
                {platformx.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
