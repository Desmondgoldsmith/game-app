import { useParams } from "react-router-dom";
import GetGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = GetGame(slug!);
  console.log("data", data);
  isLoading ? "Loading ...." : "";
  if (error) throw error;

  return (
    <>
      <div>
        <h1 className="font-bold text-[40px]">{data?.name}</h1>
        <p>{data?.description_raw}</p>
      </div>
    </>
  );
};

export default GameDetailsPage;
