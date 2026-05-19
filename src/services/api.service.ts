import { IGenre } from "../models/IGenre";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "fa39114f714a203d93b48f5a86b11906";

export const getMovies = async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}`,
  );
  const data = await response.json();
  return data;
};

export const getMoviesByGenre = async (genreId: number | string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`,
  );

  return await response.json();
};

export const getGenres = async (): Promise<IGenre[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`,
  );
  const data = await response.json();
  return data.genres;
};

export const getGenreById = async (genreId: number) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`,
  );
  const data = await response.json();
  const genre = data.genres.find((item: IGenre) => item.id === genreId);
  return genre;
};

// movie lists (now playing, popular, top rated, upcoming)

export const getMoviesByCategory = async (endpoint: string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${endpoint}?api_key=${TMDB_API_KEY}`,
  );
  const data = await response.json();
  console.log("[CATEGORY]", endpoint, data);
  return data;
};

getMoviesByCategory("now_playing");
getMoviesByCategory("popular");
getMoviesByCategory("top_rated");
getMoviesByCategory("upcoming");
