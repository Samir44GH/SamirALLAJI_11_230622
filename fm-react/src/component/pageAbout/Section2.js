import React from "react";

const Section2 = () => {
  return (
    <section className="section2">
      <source
        media="(min-width: 1439.9px)"
        srcset="./images/AP1440.jpg"
      ></source>
      <img
        src="./images/imgAbout.png"
        alt=" Photo_de_montagne "
        className="imgAbout"
      />
    </section>
  );
};

export default Section2;
