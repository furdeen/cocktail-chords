import React, { useEffect } from "react";
import Nav from "./nav";

const Header: React.FC = () => {
  useEffect(() => {
    const handleNavToggle = () => {
      const headerNav = document.querySelector(".header__nav") as HTMLElement;
      headerNav.classList.toggle("header__nav--visible");
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
