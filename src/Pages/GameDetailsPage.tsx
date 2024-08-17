import { useParams } from "react-router-dom";
import GetGame from "../hooks/useGame";
import ExpandText from "../component/expandText";
import GameAttributes from "../component/gameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading } = GetGame(slug!);
  console.log("data", data?.name);
  isLoading ? "Loading ... Please wait.." : "";
  // if (error) throw error;

  return (
    <>
      <div>
        <h1 className="font-bold text-[40px]">{data?.name}</h1>
        {data?.description_raw && (
          <ExpandText>{data.description_raw}</ExpandText>
        )}
        <GameAttributes data={data} />
      </div>
    </>
  );
};

export default GameDetailsPage;
