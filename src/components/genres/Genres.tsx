import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IGenre } from "../../models/IGenre";
import { getGenres } from "../../services/api.service";
import styles from "./Genres.module.css";

export const Genres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Genres</h1>
      <div className={styles.grid}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.card}>
            <Link to={`/genre/${genre.id}`} className={styles.link}>
              {genre.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
