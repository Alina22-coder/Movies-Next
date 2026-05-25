import React from 'react';
import Link from "next/link";
import {getGenres} from "@/services/api.service";
import {IGenre} from "@/models/IGenre";
import styles from "./Genres.module.css";

const Genres = async () => {
    const genres: IGenre[] = await getGenres();

    return (
        <div>
            <h1 className={styles.heading}>Genres</h1>
            <div className={styles.grid}>
                {genres.map((genre) => (
                    <div key={genre.id} className={styles.card}>
                        <Link href={`/genre/${genre.id}`} className={styles.link}>
                            {genre.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export {Genres};
