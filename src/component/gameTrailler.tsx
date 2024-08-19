import UseTrailler from "../hooks/useTrailler";

interface Props {
  gameId: number;
}
const GameTrailler = ({ gameId }: Props) => {
  const { data: trailler, error, isLoading } = UseTrailler(gameId);

  if (isLoading) return null;
  if (error) console.error(error);

  const path = trailler?.results[0];

  if (!path) return null;

  return (
    <div className="mt-5">
      <video src={path.data["480"]} poster={path.preview} controls />
    </div>
  );
};

export default GameTrailler;
