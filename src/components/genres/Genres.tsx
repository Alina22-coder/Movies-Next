import { useEffect, useState } from "react";
import { IGenre } from "../../models/IGenre";
import { getGenres } from "../../services/api.service";
import { Link } from "react-router-dom";

export const Genres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data));
  }, []);
  return (
    <div className="genres">
      <p>genres</p>

      {genres.map((genre) => (
        <div key={genre.id}>
          <Link to={`/genre/${genre.id}`}>
            {genre.id} - {genre.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
