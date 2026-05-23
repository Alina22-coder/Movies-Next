import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { IGenre } from "../models/IGenre";
import { getMovies, getGenres, searchMovies, getMoviesByGenre } from "../services/api.service";
import { MoviesList } from "../components/movies-list/MoviesList";
import styles from "./MoviesPage.module.css";

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query, selectedGenre]);

  useEffect(() => {
    if (query.trim()) {
      searchMovies(query, page).then((data) => {
        setMovies(data.results ?? []);
        setTotalPages(data.total_pages ?? 1);
      });
    } else if (selectedGenre) {
      getMoviesByGenre(selectedGenre, page).then((data) => {
        setMovies(data.results ?? []);
        setTotalPages(data.total_pages ?? 1);
      });
    } else {
      getMovies(page).then((data) => {
        setMovies(data.results ?? []);
        setTotalPages(data.total_pages ?? 1);
      });
    }
  }, [query, selectedGenre, page]);

  return (
    <div>
      <div className={styles.genres}>
        <button
          className={`${styles.genreBtn} ${selectedGenre === null ? styles.active : ""}`}
          onClick={() => setSelectedGenre(null)}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`${styles.genreBtn} ${selectedGenre === genre.id ? styles.active : ""}`}
            onClick={() => setSelectedGenre(genre.id === selectedGenre ? null : genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <select
        className={styles.genreSelect}
        value={selectedGenre ?? ""}
        onChange={(e) => setSelectedGenre(e.target.value ? Number(e.target.value) : null)}
      >
        <option value="">All genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>

      <MoviesList movies={movies} genres={genres} />

      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className={styles.page}>{page} / {totalPages}</span>
        <button
          className={styles.btn}
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
