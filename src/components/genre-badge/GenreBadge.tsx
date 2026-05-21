import { Link } from "react-router-dom";
import styles from "./GenreBadge.module.css";

type GenreBadgeProps = {
  id: number;
  name: string;
};

export const GenreBadge = ({ id, name }: GenreBadgeProps) => {
  return (
    <Link to={`/genre/${id}`} className={styles.badge}>
      {name}
    </Link>
  );
};
