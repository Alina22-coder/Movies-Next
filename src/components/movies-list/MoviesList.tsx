import { FC } from "react";
import { IMovie } from "../../models/IMovie";
import { IGenre } from "../../models/IGenre";
import { MoviesListCard } from "../movies-list-card/MoviesListCard";
import "./MoviesList.css";

type MoviesListProps = {
  movies: IMovie[];
  genres: IGenre[];
};

export const MoviesList: FC<MoviesListProps> = ({ movies, genres }) => {
  return (
    <div className="cards">
      {movies.map((movie) => (
        <MoviesListCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};
