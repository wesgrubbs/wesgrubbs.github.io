import React, { useState } from "react";
import "./styles.scss";

const Header = ({ isToggled, handleToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <nav>
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <button onClick={handleToggle} className="toggle-button">
              {isToggled ? "Hide Links" : "Show Links"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
