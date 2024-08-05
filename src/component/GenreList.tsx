import { GenreProps, UseGenre } from "../hooks/useGenre";

interface Props {
  getSelectedGenre: (genre: GenreProps) => void;
  selectedGenre: GenreProps | null;
}

const GenreList = ({ selectedGenre, getSelectedGenre }: Props) => {
  const { data } = UseGenre();
  return (
    <>
      <h1 className="font-mono mb-4 font-bold text-[25px] p-2">Genres</h1>
      {data.map((data) => (
        <div key={data.id} className="space-y-5">
          <div className="flex space-x-3 p-2  items-center">
            <img
              src={data.image_background}
              className="w-[45px] h-[45px] rounded-lg object-cover "
            />
            <p
              className={`${
                data.id === selectedGenre?.id
                  ? `font-extrabold text-green-500`
                  : ""
              }
              hover:cursor-pointer hover:underline`}
              onClick={() => getSelectedGenre(data)}
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
