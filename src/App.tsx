import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import GameGrid from "./component/game-grid";
import GenreList from "./component/GenreList";
import { GenreProps } from "./hooks/useGenre";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/Sort-Selector";

export interface GameQuery {
  genre: GenreProps | null;
  platform: Platform | null;
  sortOrder: string;
}

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    // If isDarkMode is true, it adds the "dark" class to the <html> element.
    // If isDarkMode is false, it removes the "dark" class from the <html> element.
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex">
          <div className="w-1/4 border border-red p-4">
            <GenreList
              selectedGenre={gameQuery.genre}
              getSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </div>
          <div className="w-3/4 p-4 border border-green-600">
            <div className="flex space-x-5 pl-3">
              <PlatformSelector
                platform={gameQuery.platform}
                selectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sort={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>

            <GameGrid gameQuery={gameQuery} />
            <PlatformSelector
              platform={gameQuery.platform}
              selectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
