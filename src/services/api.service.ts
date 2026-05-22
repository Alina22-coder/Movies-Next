import { IGenre } from "../models/IGenre";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "fa39114f714a203d93b48f5a86b11906";

export const getMovies = async (page = 1) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`,
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

export const getMovieById = async (movieId: number | string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`,
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

export const getMoviesByCategory = async (endpoint: string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${endpoint}?api_key=${TMDB_API_KEY}`,
  );
  return await response.json();
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
  );
  return await response.json();
};

export const createRequestToken = async (): Promise<string> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/authentication/token/new?api_key=${TMDB_API_KEY}`,
  );
  const data = await response.json();
  return data.request_token;
};

export const createSession = async (requestToken: string): Promise<string> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/authentication/session/new?api_key=${TMDB_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request_token: requestToken }),
    },
  );
  const data = await response.json();
  return data.session_id;
};

export const getAccount = async (sessionId: string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/account?api_key=${TMDB_API_KEY}&session_id=${sessionId}`,
  );
  return await response.json();
};
