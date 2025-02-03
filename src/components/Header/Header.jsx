import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="nav">
      <ul className="nav__links">
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li className="nav__link">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
