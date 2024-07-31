import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import GameGrid from "./component/game-grid";
import GenreList from "./component/GenreList";
import { GenreProps } from "./hooks/useGenre";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null);

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
            <GenreList getSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </div>
          <div className="w-3/4 p-4 border border-green-600">
            <GameGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
