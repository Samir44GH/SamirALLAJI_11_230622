import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigationUl">
        <NavLink
          to="/home"
          id="navigationUlAccueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigationUlTitle">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          id="navigationUlAbout"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigationUlTitle">A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
