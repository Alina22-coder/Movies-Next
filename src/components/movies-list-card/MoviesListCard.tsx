import React from 'react';
import Link from "next/link";
import {IMovie} from "@/models/IMovie";
import {IGenre} from "@/models/IGenre";
import {GenreBadge} from "@/components/genre-badge/GenreBadge";
import {StarsRating} from "@/components/stars-rating/StarsRating";
import {PosterPreview} from "@/components/poster-preview/PosterPreview";
import styles from "./MoviesListCard.module.css";

type MoviesListCardPropType = {
    movie: IMovie;
    genres?: IGenre[];
}

const MoviesListCard = ({movie, genres}: MoviesListCardPropType) => {
    const movieGenres = genres?.filter((g) => movie.genre_ids.includes(g.id)) ?? [];

    return (
        <div className={styles.card}>
            <Link href={{pathname: '/movie/' + movie.id, query: {data: JSON.stringify(movie)}}}>
                <PosterPreview posterPath={movie.poster_path} title={movie.title}/>
                <p className={styles.cardTitle}>{movie.title}</p>
            </Link>
            <div className={styles.cardContent}>
                {genres && (
                    <div className={styles.genres}>
                        {movieGenres.slice(0, 2).map((genre) => (
                            <GenreBadge key={genre.id} id={genre.id} name={genre.name}/>
                        ))}
                    </div>
                )}
                <StarsRating rating={movie.vote_average}/>
            </div>
        </div>
    );
};

export {MoviesListCard};
