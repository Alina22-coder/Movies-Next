import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { UserInfo } from "../user-info/UserInfo";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isMoviesPage = window.location.pathname === "/movies";
    if (!isMoviesPage) {
      navigate(`/movies?q=${encodeURIComponent(value)}`);
    } else {
      setSearchParams(value ? { q: value } : {});
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 48"
          width="140"
          height="35"
          className={styles.logo}
        >
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#7B2FFF" />
            </linearGradient>
          </defs>
          <polygon
            points="18,4 8,26 16,26 10,44 26,18 17,18 26,4"
            fill="url(#g1)"
          />
          <text
            x="38"
            y="34"
            fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
            fontSize="30"
            fontWeight="900"
            letterSpacing="3"
            fill="url(#g1)"
          >
            MO
          </text>
          <text
            x="96"
            y="34"
            fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
            fontSize="30"
            fontWeight="300"
            letterSpacing="3"
            fill="#ffffff"
          >
            VA
          </text>
        </svg>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${styles.nav__link} ${isActive ? styles.nav__link_active : ""}`
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search movies..."
        className={styles.search}
      />

      <div className={styles.userInfo}>
        <UserInfo />
      </div>
    </header>
  );
};
