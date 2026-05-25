"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IMovie } from "@/models/IMovie";
import { getMoviesByCategory } from "@/services/api.service";
import { MoviesListCard } from "@/components/movies-list-card/MoviesListCard";
import styles from "./Home.module.css";

const CATEGORIES: { key: string; label: string }[] = [
  { key: "now_playing", label: "Now Playing" },
  { key: "popular", label: "Popular" },
  { key: "top_rated", label: "Top Rated" },
  { key: "upcoming", label: "Upcoming" },
];

export const Home = () => {
  const [moviesByCategory, setMoviesByCategory] = useState<Record<string, IMovie[]>>({});

  useEffect(() => {
    CATEGORIES.forEach(({ key }) => {
      getMoviesByCategory(key).then((data) =>
        setMoviesByCategory((prev) => ({ ...prev, [key]: data.results })),
      );
    });
  }, []);

  return (
    <div className={styles.category}>
      {CATEGORIES.map(({ key, label }) => (
        <section key={key} className={styles.categoryWrap}>
          <h2 className={styles.categoryTitle}>{label}</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={2}
            spaceBetween={16}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {(moviesByCategory[key] ?? []).map((movie) => (
              <SwiperSlide key={movie.id}>
                <MoviesListCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </div>
  );
};
