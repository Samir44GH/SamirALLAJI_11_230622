import React from "react";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import Section1 from "../component/pageAbout/Section1";
import Section2 from "../component/pageAbout/Section2";

const About = () => {
  return (
    <div>
      <Header />
      <Section2 />
      <Section1 />
      <Footer />
    </div>
  );
};

export default About;
