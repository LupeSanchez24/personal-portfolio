import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="nav">
        <ul className="nav__links">
          <li className="nav__link">
            {" "}
            <Link to="/">Portfolio</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
