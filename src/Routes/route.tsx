import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import GameDetailsPage from "../Pages/GameDetailsPage";
import HomePage from "../Pages/HomePage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/details/:id", element: <GameDetailsPage /> },
    ],
  },
]);

export default route;
