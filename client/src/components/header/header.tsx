import React, { useEffect } from "react";
import Nav from "./nav";
import "./header.css";

const Header: React.FC = () => {
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

    return () => {
      navToggle.removeEventListener("click", handleNavToggle);
    };
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">Cocktail Chords</h1>
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
