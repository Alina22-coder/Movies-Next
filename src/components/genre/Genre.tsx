import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../models/IMovie";
import { IGenre } from "../../models/IGenre";
import { getMoviesByGenre, getGenres } from "../../services/api.service";
import { MoviesListCard } from "../movies-list-card/MoviesListCard";
import styles from "./Genre.module.css";

export const Genre = () => {
  const { id } = useParams<{ id: string }>();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([getMoviesByGenre(id), getGenres()]).then(([movieData, genreData]) => {
      setMovies(movieData.results);
      setGenres(genreData);
      setLoading(false);
    });
  }, [id]);

  const genreName = genres.find((g) => g.id === Number(id))?.name ?? "";

  if (loading) return <p className={styles.loading}>Loading...</p>;

  return (
    <div>
      <h1 className={styles.heading}>{genreName}</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MoviesListCard key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
    </div>
  );
};
