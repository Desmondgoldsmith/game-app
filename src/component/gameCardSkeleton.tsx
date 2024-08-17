import { useState, useEffect } from "react";

const GameCardSkeleton = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const animationClass = animate ? "animate-pulse" : "";

  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-in-out">
      <div
        className={`w-full h-48 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600 ${animationClass}`}
      ></div>
      <div className="p-4 space-y-3">
        <div
          className={`h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600 rounded w-3/4 ${animationClass}`}
        ></div>
        <div className="flex justify-between items-center">
          <div className="space-y-2 w-2/3">
            <div
              className={`h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600 rounded ${animationClass}`}
            ></div>
            <div
              className={`h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600 rounded w-5/6 ${animationClass}`}
            ></div>
          </div>
          <div
            className={`h-10 w-10 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600 rounded-full ${animationClass}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
