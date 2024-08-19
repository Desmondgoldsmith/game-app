import { UseGenre } from "../hooks/useGenre";
import GameQueryStore from "../store";

const GenreList = () => {
  const { data } = UseGenre();
  const gameQuery = GameQueryStore((s) => s.gameQuery);
  const getSelectedGenre = GameQueryStore((s) => s.setGenreId);

  return (
    <>
      <h1 className="font-mono mb-4 font-bold text-xl md:text-2xl p-2">
        Genres
      </h1>
      <div className="flex flex-wrap md:flex-col">
        {data?.results.map((data) => (
          <div key={data.id} className="w-1/2 md:w-full p-2">
            <div className="flex items-center space-x-3">
              <img
                src={data.image_background}
                className="w-10 h-10 rounded-lg object-cover"
                alt={data.name}
              />
              <p
                className={`${
                  data.id === gameQuery.genreId
                    ? `font-extrabold text-green-500`
                    : ""
                } text-sm md:text-base hover:cursor-pointer hover:underline`}
                onClick={() => getSelectedGenre(data.id)}
              >
                {data.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
