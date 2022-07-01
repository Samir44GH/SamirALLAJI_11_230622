import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigationUl">
        <NavLink
          to="/"
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
    </div>
  );
};

export default Navigation;
