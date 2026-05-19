import "./PosterPreview.css";

export const PosterPreview = ({ posterPath, title }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <img
      className="poster-preview"
      src={
        posterPath
          ? `${IMG_BASE_URL}${posterPath}`
          : "https://via.placeholder.com/500x750"
      }
      alt={title || "Movie poster"}
    />
  );
};
