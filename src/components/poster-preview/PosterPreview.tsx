import Image from "next/image";
import styles from "./PosterPreview.module.css";

type PosterPreviewProps = {
  posterPath: string;
  title: string;
};

export const PosterPreview = ({ posterPath, title }: PosterPreviewProps) => {
  const src = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://placehold.co/500x750/1c1c1c/666?text=No+Image";

  return (
    <Image
      className={styles.posterPreview}
      src={src}
      alt={title || "Movie poster"}
      width={500}
      height={750}
    />
  );
};
