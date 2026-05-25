"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IGenre } from "@/models/IGenre";
import styles from "@/app/(public)/movies/MoviesPage.module.css";

type Props = {
  genres: IGenre[];
  selectedGenre: number | null;
};

export const GenreFilter = ({ genres, selectedGenre }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGenreSelect = (id: number | null) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    params.delete("page");
    if (id) params.set("genre", String(id));
    else params.delete("genre");
    router.push(`/movies?${params.toString()}`);
  };

  return (
    <>
      <div className={styles.genres}>
        <button
          className={`${styles.genreBtn} ${selectedGenre === null ? styles.active : ""}`}
          onClick={() => handleGenreSelect(null)}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`${styles.genreBtn} ${selectedGenre === genre.id ? styles.active : ""}`}
            onClick={() => handleGenreSelect(selectedGenre === genre.id ? null : genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <select
        className={styles.genreSelect}
        value={selectedGenre ?? ""}
        onChange={(e) => handleGenreSelect(e.target.value ? Number(e.target.value) : null)}
      >
        <option value="">All genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </>
  );
};
