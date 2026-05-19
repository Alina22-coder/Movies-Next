import { FC } from "react";
import { IMovie } from "../../models/IMovie";
import { IGenre } from "../../models/IGenre";
import { GenreBadge } from "../genre-badge/GenreBadge";
import { StarsRating } from "../stars-rating/StarsRating";
import "./MoviesListCard.css";
import { PosterPreview } from "../poster-preview/PosterPreview";
import { Link } from "react-router-dom";
import { MovieInfo } from "../movie-info /MovieInfo";

type MoviesListCardPropType = {
  movie: IMovie;
  genres: IGenre[];
};

export const MoviesListCard: FC<MoviesListCardPropType> = ({
  movie,
  genres,
}) => {
  const movieGenres = genres.filter((g) => movie.genre_ids.includes(g.id));

  return (
    <div className="card">
      <Link to="movie">
        <PosterPreview posterPath={movie.poster_path} title={movie.title} />

        <div className="card-content">
          {/* <div className="card__title">{movie.title}</div> */}
          <MovieInfo movie={movie} />

          <div className="genres">
            {movieGenres.map((genre) => (
              <GenreBadge key={genre.id} id={genre.id} name={genre.name} />
            ))}
          </div>

          <StarsRating rating={movie.vote_average} />
        </div>
      </Link>
    </div>
  );
};
