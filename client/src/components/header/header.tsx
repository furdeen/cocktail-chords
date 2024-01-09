import { useState, useEffect } from "react";
import Nav from "./nav";
import "./header.css";
import cocktailChordsLogo from "/images/cocktail_chords_logo.png";
import cocktailChordsLogoDark from "/images/cocktail_chords_logo_dark.png";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleNavToggle = (event: Event) => {
      const headerNav = document.querySelector(".header__nav") as HTMLElement;
      const isLinkClicked = (event.target as HTMLElement).closest(
        ".header__nav-link"
      );

      if (isLinkClicked) {
        headerNav.classList.remove("header__nav--visible");
      } else {
        headerNav.classList.toggle("header__nav--visible");
      }
    };

    const navToggle = document.getElementById("nav-toggle") as HTMLInputElement;
    navToggle.addEventListener("click", handleNavToggle);

    // dark mode dection to swap logo
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(darkModeQuery.matches);
    darkModeQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      navToggle.removeEventListener("click", handleNavToggle);
      darkModeQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">
        <img
          className="header__title-logo"
          src={isDarkMode ? cocktailChordsLogoDark : cocktailChordsLogo}
          alt="Cocktail Chords Logo"
        />
      </h1>
      <input
        type="checkbox"
        id="nav-toggle"
        className="header__nav-toggle-input"
      />
      <label htmlFor="nav-toggle" className="header__nav-icon">
        &#9776;
      </label>
      <Nav />
    </header>
  );
};

export default Header;
