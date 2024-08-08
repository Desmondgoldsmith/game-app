import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import GameGrid from "./component/game-grid";
import GenreList from "./component/GenreList";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/Sort-Selector";
import GameHeading from "./component/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchValue: string;
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
        <Navbar
          onSearch={(searchValue) =>
            setGameQuery({ ...gameQuery, searchValue })
          }
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flex">
          <div className="w-[15%] border border-red p-4">
            <GenreList
              selectedGenreId={gameQuery.genreId}
              getSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </div>
          <div className="w-[85%] p-4 border border-green-600">
            <div className="space-x-5 pl-3 mb-4">
              <GameHeading gameQuery={gameQuery} />
            </div>
            <div className="flex space-x-5 pl-3">
              <PlatformSelector
                platformId={gameQuery.platformId}
                selectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
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
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
