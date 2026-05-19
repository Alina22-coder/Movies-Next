import { useEffect, useState } from "react";
import { IGenre } from "../../models/IGenre";
import { getGenres } from "../../services/api.service";

export const Genres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data.genres));
  }, []);
  return (
    <div className="genres">
      <p>genres</p>

      {genres.map((genre) => (
        <div>
          {genre.id} - {genre.name}
        </div>
      ))}
    </div>
  );
};
