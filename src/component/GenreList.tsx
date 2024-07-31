import { GenreProps, UseGenre } from "../hooks/useGenre";

interface Props {
  getSelectedGenre: (genre: GenreProps) => void;
}

const GenreList = ({ getSelectedGenre }: Props) => {
  const { data } = UseGenre();
  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="space-y-5">
          <div className="flex space-x-3 p-2  items-center">
            <img
              src={data.image_background}
              className="w-[45px] h-[45px] rounded-lg object-cover border "
            />
            <p
              className="hover:cursor-pointer hover:underline"
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
