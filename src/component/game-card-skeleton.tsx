import { useState, useEffect } from "react";

const GameCardSkeleton = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
      <div
        className={`w-full h-48 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 ${
          animate ? "animate-pulse" : ""
        }`}
      ></div>
      <div className="p-4 space-y-3">
        <div
          className={`h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 ${
            animate ? "animate-pulse" : ""
          }`}
        ></div>
        <div className="flex justify-between items-center">
          <div className="space-y-2 w-2/3">
            <div
              className={`h-4 bg-gray-300 dark:bg-gray-600 rounded ${
                animate ? "animate-pulse" : ""
              }`}
            ></div>
            <div
              className={`h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 ${
                animate ? "animate-pulse" : ""
              }`}
            ></div>
          </div>
          <div
            className={`h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full ${
              animate ? "animate-pulse" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
