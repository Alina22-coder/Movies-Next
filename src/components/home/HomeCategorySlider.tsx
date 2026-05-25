"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IMovie } from "@/models/IMovie";
import { MoviesListCard } from "@/components/movies-list-card/MoviesListCard";
import styles from "./Home.module.css";

type Props = {
  label: string;
  movies: IMovie[];
};

export const HomeCategorySlider = ({ label, movies }: Props) => {
  return (
    <section className={styles.categoryWrap}>
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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MoviesListCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
