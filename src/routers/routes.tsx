import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MoviesPage } from "../pages/MoviesPage";
import { Genres } from "../components/genres/Genres";
import { Genre } from "../components/genre/Genre";
import { Home } from "../components/home/Home";
import { MovieInfoPage } from "../pages/MovieInfoPage";
import { AuthCallbackPage } from "../pages/AuthCallbackPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movie/:id",
        element: <MovieInfoPage />,
      },

      {
        path: "genres",
        element: <Genres />,
      },
      {
        path: "genre/:id",
        element: <Genre />,
      },
      {
        path: "auth/callback",
        element: <AuthCallbackPage />,
      },
    ],
  },
]);
