import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Header } from "../components/header/Header";
import { MoviesList } from "../components/movies-list/MoviesList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <MoviesList />,
      },
    ],
  },
]);
