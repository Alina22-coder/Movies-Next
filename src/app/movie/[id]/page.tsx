import { getMovieById } from "@/services/api.service";
import { MovieInfo } from "@/components/movie-info/MovieInfo";

type Props = { params: Promise<{ id: string }> };

export default async function MoviePage({ params }: Props) {
  const { id } = await params;
  const movie = await getMovieById(id);

  if (!movie || !movie.id) return <p>Movie not found.</p>;

  return <MovieInfo movie={movie} />;
}
