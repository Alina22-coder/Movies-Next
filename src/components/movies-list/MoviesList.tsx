import React from 'react';
import {IMovie} from "@/models/IMovie";
import {IGenre} from "@/models/IGenre";
import {MoviesListCard} from "@/components/movies-list-card/MoviesListCard";
import styles from "./MoviesList.module.css";

type MoviesListProps = {
    movies: IMovie[];
    genres: IGenre[];
}

const MoviesList = ({movies, genres}: MoviesListProps) => {
    return (
        <div className={styles.cards}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} genres={genres}/>
            ))}
        </div>
    );
};

export {MoviesList};
