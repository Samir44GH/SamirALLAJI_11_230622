import React from "react";
import Footer from "../component/layout/Footer";
import Logo from "../component/layout/Logo";
import Navigation from "../component/layout/Navigation";
import Section2 from "../component/pageAbout/Section2";

const About = () => {
  return (
    <div>
      <div className="headerLogNav">
        <Logo />
        <Navigation />
      </div>
      <div className="mainAbout">
        <Section2 />
      </div>
      <footer className="footerGlobal">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
