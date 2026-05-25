const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const getToken = () =>
  process.env.NEXT_PUBLIC_TMDB_TOKEN ?? process.env.TMDB_TOKEN ?? "";

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

export const getMovies = async (page = 1) => {
  const response = await fetch(`${TMDB_BASE_URL}/discover/movie?page=${page}`, {
    headers: authHeaders(),
  });
  return response.json();
};

export const getMoviesByGenre = async (genreId: number | string, page = 1) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?with_genres=${genreId}&page=${page}`,
    { headers: authHeaders() },
  );
  return response.json();
};

export const getMovieById = async (movieId: number | string) => {
  const response = await fetch(`${TMDB_BASE_URL}/movie/${movieId}`, {
    headers: authHeaders(),
  });
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(`${TMDB_BASE_URL}/genre/movie/list`, {
    headers: authHeaders(),
  });
  const data = await response.json();
  return data.genres;
};

export const getMoviesByCategory = async (endpoint: string) => {
  const response = await fetch(`${TMDB_BASE_URL}/movie/${endpoint}`, {
    headers: authHeaders(),
  });
  return response.json();
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    { headers: authHeaders() },
  );
  return response.json();
};

export const createRequestToken = async (): Promise<string> => {
  const response = await fetch(`${TMDB_BASE_URL}/authentication/token/new`, {
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!data.success || !data.request_token) {
    throw new Error(data.status_message ?? "Failed to create request token");
  }
  return data.request_token;
};

export const createSession = async (requestToken: string): Promise<string> => {
  const response = await fetch(`${TMDB_BASE_URL}/authentication/session/new`, {
    method: "POST",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ request_token: requestToken }),
  });
  const data = await response.json();
  if (!data.success || !data.session_id) {
    throw new Error(data.status_message ?? "Failed to create session");
  }
  return data.session_id;
};

export const getAccount = async (sessionId: string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/account?session_id=${sessionId}`,
    { headers: authHeaders() },
  );
  return response.json();
};
