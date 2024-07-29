interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const colorDet =
    score > 80 ? `bg-green-400` : score > 60 ? `bg-blue-400` : `bg-zinc-300`;

  return (
    <>
      <div
        className={`p-1 w-8 h-8 text-center items-center rounded-md ${colorDet}`}
      >
        {score}
      </div>
    </>
  );
};

export default CriticScore;
