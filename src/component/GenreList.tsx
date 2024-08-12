import { UseGenre } from "../hooks/useGenre";
import GameQueryStore from "../store";

const GenreList = () => {
  const { data } = UseGenre();
  const gameQuery = GameQueryStore((s) => s.gameQuery);
  const getSelectedGenre = GameQueryStore((s) => s.setGenreId);

  return (
    <>
      <h1 className="font-mono mb-4 font-bold text-[25px] p-2">Genres</h1>
      {data?.results.map((data) => (
        <div key={data.id} className="space-y-5">
          <div className="flex space-x-3 p-2  items-center">
            <img
              src={data.image_background}
              className="w-[45px] h-[45px] rounded-lg object-cover "
            />
            <p
              className={`${
                data.id === gameQuery.genreId
                  ? `font-extrabold text-green-500`
                  : ""
              }
              hover:cursor-pointer hover:underline`}
              onClick={() => getSelectedGenre(data.id)}
            >
              {data.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default GenreList;
