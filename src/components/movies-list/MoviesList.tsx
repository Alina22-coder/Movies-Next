import { useState, useEffect } from "react";
import { getMovies } from "../../services/api.service";
import { IMovie } from "../../models/IMovie";
import { MoviesListCard } from "../movies-list-card/MoviesListCard";

export const MoviesList = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <MoviesListCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};
