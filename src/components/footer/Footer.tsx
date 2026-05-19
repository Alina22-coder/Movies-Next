import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Home
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Categories
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Devices
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Pricing
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              FAQ
            </Link>
          </li>
        </ul>

        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Movies
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Gernes
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Trending
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              New Release
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Popular
            </Link>
          </li>
        </ul>

        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Shows
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Gernes
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Trending
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              New Release
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Popular
            </Link>
          </li>
        </ul>

        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Support
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Contact Us
            </Link>
          </li>
        </ul>

        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Subscription
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Plans
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Features
            </Link>
          </li>
        </ul>

        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Connect With Us
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              facebook
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              twitter
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
