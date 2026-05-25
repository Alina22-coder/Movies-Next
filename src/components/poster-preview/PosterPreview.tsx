import React from 'react';
import Image from "next/image";
import styles from "./PosterPreview.module.css";

type PosterPreviewProps = {
    posterPath: string;
    title: string;
}

const PosterPreview = ({posterPath, title}: PosterPreviewProps) => {
    if (!posterPath) {
        return (
            <div className={styles.posterPlaceholder}>
                <span>No Image</span>
            </div>
        );
    }

    return (
        <Image
            className={styles.posterPreview}
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title || 'Movie poster'}
            width={500}
            height={750}
        />
    );
};

export {PosterPreview};
