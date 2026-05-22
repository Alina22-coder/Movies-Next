import { IGenre } from "../../models/IGenre";
import { IMovie } from "../../models/IMovie";
import { GenreBadge } from "../genre-badge/GenreBadge";
import { StarsRating } from "../stars-rating/StarsRating";
import styles from "./MovieInfo.module.css";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

type MovieInfoProp = {
  movie: IMovie;
  genres?: IGenre[];
};

export const MovieInfo = ({ movie, genres = [] }: MovieInfoProp) => {
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "—";

  const movieGenres = genres.filter((g) => movie.genre_ids.includes(g.id));

  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        {movie.poster_path ? (
          <img
            src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
            alt={movie.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>No Image</div>
        )}
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>
          {movie.title} <span className={styles.year}>({releaseYear})</span>
        </h1>

        {movie.original_title !== movie.title && (
          <p className={styles.originalTitle}>{movie.original_title}</p>
        )}

        {movieGenres.length > 0 && (
          <div className={styles.badges}>
            {movieGenres.map((g) => (
              <GenreBadge key={g.id} id={g.id} name={g.name} />
            ))}
          </div>
        )}

        <div className={styles.rating}>
          <StarsRating rating={movie.vote_average} />
          <span className={styles.voteCount}>
            {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)
          </span>
        </div>

        {movie.overview && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.overview}>{movie.overview}</p>
          </div>
        )}

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Release Date</span>
            <span>{String(movie.release_date)}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Language</span>
            <span>{movie.original_language.toUpperCase()}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Popularity</span>
            <span>{movie.popularity.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
