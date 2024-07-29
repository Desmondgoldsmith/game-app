import { UseGenre } from "../hooks/useGenre";

const GenreList = () => {
  const { data } = UseGenre();
  return (
    <ul>
      {data.map((data) => (
        <li>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
