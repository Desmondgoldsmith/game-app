import { UseGenre } from "../hooks/useGenre";

const GenreList = () => {
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
            <p className="hover: cursor-pointer hover: underline">
              {data.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default GenreList;
