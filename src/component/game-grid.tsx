import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UseGames } from "../hooks/useGames";
import GameQueryStore from "../store";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";

const GameGrid = () => {
  const gameQuery = GameQueryStore((s) => s.gameQuery);
  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = UseGames(gameQuery);
  const chunks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <p>error: {error.message}</p>}
      <InfiniteScroll
        loader="Loading ..."
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        dataLength={fetchedGameCount}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {isLoading === true
            ? chunks.map((chunk) => <GameCardSkeleton key={chunk} />)
            : ""}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} results={game} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <button
          className="rounded-md bg-cyan-900 mb-3 p-2 ml-3"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading ..." : "Next"}
        </button> 
      )}*/}
    </>
  );
};

export default GameGrid;
