import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { getMovieById } from "../services/api.service";
import { MovieInfo } from "../components/movie-info /MovieInfo";

export const MovieInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getMovieById(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return <MovieInfo movie={movie} />;
};
