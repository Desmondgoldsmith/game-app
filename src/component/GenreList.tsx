import UseGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = UseGenre();
  return (
    <ul>
      {genre.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
