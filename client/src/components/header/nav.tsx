import { NavLink } from "react-router-dom";

// colours are temporary
const Nav = () => (
  <>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
          >
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/dailymix"
            style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
          >
            Cocktail of the Day
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/musicmix"
            style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
          >
            Chord &amp; Mix Matchmaker
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
