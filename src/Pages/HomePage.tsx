import GameGrid from "../component/gameGrid";
import GameHeading from "../component/GameHeading";
import GenreList from "../component/GenreList";
import PlatformSelector from "../component/PlatformSelector";
import SelectSort from "../component/SelectSort";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/4 lg:w-1/5 p-2 md:p-4">
        <GenreList />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 p-2 md:p-4">
        <div className="mb-4">
          <GameHeading />
        </div>
        <div className="flex flex-row items-center space-x-2 sm:space-x-5 mb-4">
          <PlatformSelector />
          <SelectSort />
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default HomePage;
