import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsLocation from "./CardsLocation";

const Body2 = () => {
  const [data, setData] = useState([]);
  //Le UseEffect() se jour lorsque le composant est appelé
  useEffect(() => {
    axios.get("./logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="locationList">
      {data.map((location, index) => (
        <CardsLocation key={index} location={location} />
        // <h1 key={index.rating}>{location.title}</h1>
      ))}
    </section>
  );
};

export default Body2;
