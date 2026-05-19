import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Header } from "../components/header/Header";
import { MoviesList } from "../components/movies-list/MoviesList";
import { Genres } from "../components/genres/Genres";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <MoviesList />,
      },

      {
        path: "genres",
        element: <Genres />,
      },
    ],
  },
]);
