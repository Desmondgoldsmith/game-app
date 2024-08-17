interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const colorDet =
    score >= 90
      ? `bg-green-400 font-bold`
      : score > 80
      ? `bg-yellow-400 font-bold`
      : score > 60
      ? `bg-blue-400 font-bold`
      : `bg-zinc-600 font-bold`;

  return (
    <>
      <div
        className={`p-1 w-10 h-9 text-center  items-center  rounded-md ${colorDet}`}
      >
        {score === null ? "N/A" : score}
      </div>
    </>
  );
};

export default CriticScore;
