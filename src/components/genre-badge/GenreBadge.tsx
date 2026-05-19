import { Link } from "react-router-dom";
import "./GenreBadge.css";

type GenreBadgeProps = {
  id: number;
  name: string;
};

export const GenreBadge = ({ id, name }: GenreBadgeProps) => {
  return (
    <div className="genre-badge">
      <Link
        to={`/genre/${id}`}
        style={{
          padding: "4px 10px",
          borderRadius: "12px",
          backgroundColor: "#eee",
          color: "#333",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {name}
      </Link>
    </div>
  );
};
