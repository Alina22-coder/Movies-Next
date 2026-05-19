import { useState, useEffect } from "react";
import { getMovies } from "../../services/api.service";
import { IMovie } from "../../models/IMovie";
import { MoviesListCard } from "../movies-list-card/MoviesListCard";
import { IGenre } from "../../models/IGenre";
import { getGenres } from "../../services/api.service";
import "./MoviesList.css";

export const MoviesList = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data.results));
    getGenres().then(setGenres);
  }, []);

  return (
    <div className="cards">
      {movies.map((movie) => (
        <MoviesListCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};
