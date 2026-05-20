import { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import { IGenre } from "../../models/IGenre";
import { getGenres, getMoviesByCategory } from "../../services/api.service";
import { MoviesListCard } from "../movies-list-card/MoviesListCard";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getMoviesByCategory("now_playing").then((data) => setMovies(data.results));
  }, []);

  getGenres().then(setGenres);

  return (
    <div>
      {movies.map((movie) => (
        <MoviesListCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};
