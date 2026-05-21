import { FC } from "react";
import "./PosterPreview.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

type PosterPreviewProps = {
  posterPath: string;
  title: string;
};

export const PosterPreview: FC<PosterPreviewProps> = ({ posterPath, title }) => {
  return (
    <img
      className="poster-preview"
      src={posterPath ? `${IMG_BASE_URL}${posterPath}` : "https://placehold.co/500x750/1c1c1c/666?text=No+Image"}
      alt={title || "Movie poster"}
    />
  );
};
