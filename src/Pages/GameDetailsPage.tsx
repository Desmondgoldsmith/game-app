import { useParams } from "react-router-dom";
import GetGame from "../hooks/useGame";
import ExpandText from "../component/expandText";
import GameAttributes from "../component/gameAttributes";
import GameTrailler from "../component/gameTrailler";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading } = GetGame(slug!);

  if (isLoading) return <div>Loading ... Please wait..</div>;
  if (!data) return null;

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-4xl mb-6">{data?.name}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-6">
          {data?.description_raw && (
            <ExpandText>{data.description_raw}</ExpandText>
          )}
          <GameAttributes data={data} />
        </div>
        <div className="lg:w-1/3">
          <GameTrailler gameId={data.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
