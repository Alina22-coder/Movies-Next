import { IMovie } from "../../models/IMovie";

type MovieInfoProp = {
  movie: IMovie;
};

export const MovieInfo = ({ movie }: MovieInfoProp) => {
  return (
    <div className="card__title">
      {movie.title}
      <p>descr</p>
    </div>
  );
};
