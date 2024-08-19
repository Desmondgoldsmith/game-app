import GameGrid from "../component/gameGrid";
import GameHeading from "../component/GameHeading";
import GenreList from "../component/GenreList";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 lg:w-1/5 p-2 md:p-4">
        <GenreList />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 p-2 md:p-4">
        <div className="mb-4">
          <GameHeading />
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 mb-4">
          <PlatformSelector />
          <SortSelector />
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default HomePage;
