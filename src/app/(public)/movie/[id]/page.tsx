import React from 'react';
import {Metadata} from "next";
import {getMovieById} from "@/services/api.service";
import {MovieInfo} from "@/components/movie-info/MovieInfo";
import {IMovie} from "@/models/IMovie";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ data?: string }>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    const movie = await getMovieById(id);
    return {
        title: movie?.title ? `${movie.title} — MOVA` : 'Movie — MOVA',
        description: movie?.overview ?? 'Movie details',
    }
}

const MoviePage = async ({params, searchParams}: Props) => {
    const {data} = await searchParams;
    let movie: IMovie | null = null;

    if (typeof data === 'string') {
        movie = JSON.parse(data) as IMovie;
    } else {
        const {id} = await params;
        movie = await getMovieById(id);
    }

    if (!movie || !movie.id) return <p>Movie not found.</p>;

    return <MovieInfo movie={movie}/>;
}

export default MoviePage;
