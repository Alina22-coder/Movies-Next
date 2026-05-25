import React from 'react';
import {getMoviesByCategory} from "@/services/api.service";
import {HomeCategorySlider} from "./HomeCategorySlider";
import styles from "./Home.module.css";

const CATEGORIES: { key: string; label: string }[] = [
    {key: 'now_playing', label: 'Now Playing'},
    {key: 'popular', label: 'Popular'},
    {key: 'top_rated', label: 'Top Rated'},
    {key: 'upcoming', label: 'Upcoming'},
];

const Home = async () => {
    const results = await Promise.all(
        CATEGORIES.map(({key}) => getMoviesByCategory(key)),
    );

    return (
        <div className={styles.category}>
            {CATEGORIES.map(({key, label}, i) => (
                <HomeCategorySlider key={key} label={label} movies={results[i].results ?? []}/>
            ))}
        </div>
    );
};

export {Home};
