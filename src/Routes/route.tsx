import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import GameDetailsPage from "../Pages/GameDetailsPage";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/details/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default route;
