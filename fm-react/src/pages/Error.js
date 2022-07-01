import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/layout/Footer";
import Logo from "../component/layout/Logo";
import Navigation from "../component/layout/Navigation";

const Error = () => {
  return (
    <div className="error">
      <div className="headerLogNav">
        <Logo />
        <Navigation />
      </div>

      <div className="mainError">
        <h2 className="number">404</h2>
        <p className="numberText">
          Oups! La page que vous demandez n'existe pas.
        </p>

        <NavLink to="/" className="navigationAccueilError">
          <p className="navigationUlTitle">Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
      <footer className="footerGlobal">
        <Footer />
      </footer>
    </div>
  );
};

export default Error;
