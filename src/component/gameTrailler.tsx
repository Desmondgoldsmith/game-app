import UseTrailler from "../hooks/useTrailler";

interface Props {
  gameId: number;
}

const GameTrailler = ({ gameId }: Props) => {
  const { data: trailler, error, isLoading } = UseTrailler(gameId);

  if (isLoading) return <div>Loading trailer...</div>;
  if (error) return <div>Error loading trailer</div>;

  const path = trailler?.results[0];

  if (!path) return <div>No trailer available</div>;

  return (
    <div className="w-full">
      <video
        src={path.data["480"]}
        poster={path.preview}
        controls
        className="w-full h-auto"
      />
    </div>
  );
};

export default GameTrailler;
