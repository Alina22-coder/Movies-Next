import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MoviesList } from "../components/movies-list/MoviesList";
import { Genres } from "../components/genres/Genres";
import { Genre } from "../components/genre/Genre";

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
      {
        path: "genre/:id",
        element: <Genre />,
      },
    ],
  },
]);
