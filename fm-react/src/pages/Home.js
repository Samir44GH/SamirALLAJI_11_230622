import React from "react";
import Logo from "../component/layout/Logo";
import Navigation from "../component/layout/Navigation";
import Body1 from "../component/pageHome/Body1";
import Body2 from "../component/pageHome/Body2";
import Footer from "../component/layout/Footer";

const Home = () => {
  return (
    <div className="Home">
      <header className="headerLogNav">
        <Logo />
        <Navigation />
      </header>
      <main className="bodyHome">
        <Body1 />
        <Body2 />
      </main>
      <footer className="footerGlobal">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
