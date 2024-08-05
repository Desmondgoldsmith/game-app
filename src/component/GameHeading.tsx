import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const dynamicHeader = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <>
      <h1 className="text-[36px] font-mono font-bold">{dynamicHeader}</h1>
    </>
  );
};

export default GameHeading;
