import {IMovie} from "@/models/IMovie";
import {IGenre} from "@/models/IGenre";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const getToken = () =>
    process.env.NEXT_PUBLIC_TMDB_TOKEN ?? process.env.TMDB_TOKEN ?? "";

const authHeaders = () => ({
    Authorization: `Bearer ${getToken()}`,
});

interface IMoviesResponse {
    results: IMovie[];
    total_pages: number;
    page: number;
}

export const getMovies = async (page = 1): Promise<IMoviesResponse> => {
    return await fetch(`${TMDB_BASE_URL}/discover/movie?page=${page}`, {
        headers: authHeaders(),
        next: {revalidate: 3600},
    }).then(res => res.json());
};

export const getMoviesByGenre = async (genreId: number | string, page = 1): Promise<IMoviesResponse> => {
    return await fetch(`${TMDB_BASE_URL}/discover/movie?with_genres=${genreId}&page=${page}`, {
        headers: authHeaders(),
        next: {revalidate: 3600},
    }).then(res => res.json());
};

export const getMovieById = async (movieId: number | string): Promise<IMovie> => {
    return await fetch(`${TMDB_BASE_URL}/movie/${movieId}`, {
        headers: authHeaders(),
        next: {revalidate: 3600},
    }).then(res => res.json());
};

export const getGenres = async (): Promise<IGenre[]> => {
    const data = await fetch(`${TMDB_BASE_URL}/genre/movie/list`, {
        headers: authHeaders(),
        next: {revalidate: 86400},
    }).then(res => res.json());

    return data.genres;
};

export const getMoviesByCategory = async (endpoint: string): Promise<IMoviesResponse> => {
    return await fetch(`${TMDB_BASE_URL}/movie/${endpoint}`, {
        headers: authHeaders(),
        next: {revalidate: 3600},
    }).then(res => res.json());
};

export const searchMovies = async (query: string, page = 1): Promise<IMoviesResponse> => {
    return await fetch(`${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`, {
        headers: authHeaders(),
        next: {revalidate: 3600},
    }).then(res => res.json());
};
