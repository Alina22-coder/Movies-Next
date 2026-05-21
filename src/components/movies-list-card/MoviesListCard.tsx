import { FC } from "react";
import { IMovie } from "../../models/IMovie";
import { IGenre } from "../../models/IGenre";
import { GenreBadge } from "../genre-badge/GenreBadge";
import { StarsRating } from "../stars-rating/StarsRating";
import styles from "./MoviesListCard.module.css";
import { PosterPreview } from "../poster-preview/PosterPreview";
import { Link } from "react-router-dom";
type MoviesListCardPropType = {
  movie: IMovie;
  genres?: IGenre[];
};

export const MoviesListCard: FC<MoviesListCardPropType> = ({
  movie,
  genres,
}) => {
  const movieGenres =
    genres?.filter((g) => movie.genre_ids.includes(g.id)) ?? [];

  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.id}`}>
        <PosterPreview posterPath={movie.poster_path} title={movie.title} />

        <div className={styles["card-content"]}>
          <p className={styles.card__title}>{movie.title}</p>

          {genres && (
            <div className={styles.genres}>
              {movieGenres.map((genre) => (
                <GenreBadge key={genre.id} id={genre.id} name={genre.name} />
              ))}
            </div>
          )}

          <StarsRating rating={movie.vote_average} />
        </div>
      </Link>
    </div>
  );
};
