import React from "react";

const Body1 = () => {
  return (
    <section className="sectionSlogan">
      
       <img
        // src="./images/IMGboody1-1.jpg"
    srcSet="./images/IMGo.png 767.9w 1023.9w 1439.9w "
        className="sloganImg"
        alt="Falaises au bord de la mer"
      /> 
      <h1 className="sloganTitle">Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default Body1;
