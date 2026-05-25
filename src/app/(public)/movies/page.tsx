import {Suspense} from "react";
import {getMovies, getGenres, searchMovies, getMoviesByGenre} from "@/services/api.service";
import {MoviesList} from "@/components/movies-list/MoviesList";
import {GenreFilter} from "@/components/movies-list/GenreFilter";
import {Pagination} from "@/components/movies-list/Pagination";

type Props = {
    searchParams: Promise<{ q?: string; genre?: string; page?: string }>
}

const MoviesPage = async ({searchParams}: Props) => {
    const {q = '', genre, page: pageParam} = await searchParams;
    const page = Number(pageParam) || 1;
    const genreId = genre ? Number(genre) : null;

    const [genresList, moviesData] = await Promise.all([
        getGenres(),
        q.trim()
            ? searchMovies(q, page)
            : genreId
                ? getMoviesByGenre(genreId, page)
                : getMovies(page),
    ]);

    const movies = moviesData.results ?? [];
    const totalPages = moviesData.total_pages ?? 1;

    return (
        <div>
            <Suspense>
                <GenreFilter genres={genresList} selectedGenre={genreId}/>
            </Suspense>

            <MoviesList movies={movies} genres={genresList}/>

            <Suspense>
                <Pagination page={page} totalPages={totalPages}/>
            </Suspense>
        </div>
    );
}

export default MoviesPage;
