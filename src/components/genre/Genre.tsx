import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByGenre, getGenres } from "../../services/api.service";
import { IMovie } from "../../models/IMovie";
import { MoviesListCard } from "../movies-list-card/MoviesListCard";
import { IGenre } from "../../models/IGenre";

export const Genre = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getMoviesByGenre(id).then((data) => {
      setMovies(data.results);
    });
    getGenres().then(setGenres);
  }, [id]);
  const genreName = genres.find((g) => g.id === Number(id))?.name;

  return (
    <div>
      <h1>{genreName}</h1>
      {movies.map((movie) => (
        // <div key={movie.id}>
        //   {movie.id} - {movie.title}
        //   <div>
        //     <PosterPreview posterPath={movie.poster_path} title={movie.title} />
        //   </div>
        //   <StarsRating rating={movie.vote_average} />
        // </div>

        <MoviesListCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};
