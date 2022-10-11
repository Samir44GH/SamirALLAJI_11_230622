import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsLocation from "./CardsLocation";

const MainHome = () => {
  const [data, setData] = useState([]);
  //Le UseEffect() se joue lorsque le composant est appelé
  useEffect(() => {
    axios.get("./logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="bodyHome">
      <section className="sectionSlogan">
        <img
          src="./images/IMGboody1-1.jpg"
          srcSet="./images/IMGo.png 767.9w 1023.9w 1439.9w "
          className="sloganImg"
          alt="Falaises au bord de la mer"
        />
        <h1 className="sloganTitle">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="locationList">
        {data.map((location, index) => (
          <CardsLocation key={index} appart={location} />
          // <h1 key={index.rating}>{location.title}</h1>
        ))}
      </section>
    </div>
  );
};

export default MainHome;
