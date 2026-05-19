const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "fa39114f714a203d93b48f5a86b11906";

export const getMovies = async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}`,
  );
  const data = response.json();
  console.log(data);
  return data;
};

export const getGenres = async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`,
  );
  const data = await response.json();
  console.log(data);
  return data;
};
