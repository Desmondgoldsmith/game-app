import React from "react";
import { UseGames } from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import GameQueryStore from "../store";

const GameGrid = () => {
  const gameQuery = GameQueryStore((s) => s.gameQuery);
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    UseGames(gameQuery);
  const chunks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <p>error: {error.message}</p>}
      <InfiniteScroll
        loader={<div className="text-center mt-4">Loading ...</div>}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        dataLength={fetchedGameCount}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading
            ? chunks.map((chunk) => <GameCardSkeleton key={chunk} />)
            : data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCard key={game.id} results={game} />
                  ))}
                </React.Fragment>
              ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
