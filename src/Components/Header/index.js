import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/work">Selected Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/background">Clients</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
