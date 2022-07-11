import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <main className="mainError">
      <h2 className="number">
        <strong>404</strong>
      </h2>
      <p className="numberText">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <NavLink to="/" className="navigationAccueilError">
        <p className="navigationUlTitleAccueil">
          Retourner sur la page d’accueil
        </p>
      </NavLink>
    </main>
  );
};

export default Error;
