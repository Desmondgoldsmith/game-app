import GameGrid from "../component/gameGrid";
import GameHeading from "../component/GameHeading";
import GenreList from "../component/GenreList";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";

const HomePage = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[15%] p-4">
          <GenreList />
        </div>
        <div className="w-[85%] p-4">
          <div className="space-x-5 pl-3 mb-4">
            <GameHeading />
          </div>
          <div className="flex space-x-5 pl-3">
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameGrid />
        </div>
      </div>
    </>
  );
};

export default HomePage;
