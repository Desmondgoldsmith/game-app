import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="w-full mx-auto">
      <h1 className="font-mono text-[60px] text-center">Ooops!</h1>

      {isRouteErrorResponse(error) ? (
        <p className="text-center">
          This page does not exist! Click{" "}
          <Link className="text-blue-600 font-bold" to="/">
            here
          </Link>{" "}
          to be redirected to the home page
        </p>
      ) : (
        <p className="text-center">An error occured. Try again Later.</p>
      )}
    </div>
  );
};

export default ErrorPage;
