import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="nav__item">
            <Link to="/tv-shows">TV Schows</Link>
          </li>
          <li className="nav__item">
            <Link to="/music">Music</Link>
          </li>
          <li className="nav__item">
            <Link to="/music">Audiobooks</Link>
          </li>
          <li className="nav__item">
            <Link to="/music">Games</Link>
          </li>
          <li className="nav__item">
            <Link to="/music">Apps</Link>
          </li>
          <li className="nav__item">
            <Link to="/music">Updates</Link>
          </li>
        </ul>
      </div>

      <div>
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
      </div>
    </div>
  );
};
