// import useScreenshots from "../hooks/useScreenshots";

// interface Props {
//   gameId: number;
// }

// const Screenshots = ({ gameId }: Props) => {
//   const { data, isLoading, error } = useScreenshots(gameId);
//   if (isLoading) return null;
//   if (error) console.error(error);
//   return (
//     <div>
//       {data?.results.map((screenshot) => (
//         <img
//           key={screenshot.id}
//           src={screenshot.image}
//           alt="screenshot image"
//         />
//       ))}
//     </div>
//   );
// };

// export default Screenshots;
