import { FC } from "react";
import { IMovie } from "../../models/IMovie";
import styles from "./MoviesListCard.module.css";

type MoviesListCardPropType = {
  movie: IMovie;
};

export const MoviesListCard: FC<MoviesListCardPropType> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={styles.card__title}>{movie.title}</div>
    </div>
  );
};
