import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <div className="variant dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 48"
            width="200"
            height="50"
            className="logo"
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
        </div>
      </Link>
      {/* logo end */}

      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/movies">Movies</Link>
          </li>
          {/* <li className="nav__item">
            <Link to="/tv-shows">TV Schows</Link>
          </li> */}
          {/* <li className="nav__item">
            <Link to="/music">Music</Link>
          </li> */}
          {/* <li className="nav__item">
            <Link to="/music">Audiobooks</Link>
          </li> */}
          {/* <li className="nav__item">
            <Link to="/music">Games</Link>
          </li> */}
          {/* <li className="nav__item">
            <Link to="/music">Apps</Link>
          </li>
          <li className="nav__item">
            <Link to="/music">Updates</Link>
          </li> */}
          <li className="nav__item">
            <Link to="/genres">Genres</Link>
          </li>
        </ul>
      </div>

      <div className="account">
        {/* <img src="react.svg" alt="photo" /> */}
        NAME
      </div>

      {/* <div>
        Account
        <ul>
          <li>
            <Link to="">Library</Link>
          </li>

          <li>
            <Link to="">Wishlist</Link>
          </li>

          <li>
            <Link to="">Settings</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

// зробити стилізацію
// зробити адаптацію
