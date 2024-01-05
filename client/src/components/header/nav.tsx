import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  useEffect(() => {
    const handleHamburgerClick = () => {
      const headerNav = document.querySelector(".header__nav") as HTMLElement;
      headerNav.classList.remove("header__nav--visible");
    };

    const navLinks = document.querySelectorAll(".header__nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleHamburgerClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleHamburgerClick);
      });
    };
  }, []);

  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/" className="header__nav-link">
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/dailymix" className="header__nav-link">
              Cocktail of the Day
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/musicmix" className="header__nav-link">
              Chord &amp; Mix Matchmaker
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
