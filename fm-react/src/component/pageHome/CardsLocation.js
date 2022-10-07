import React from "react";
import { Link } from "react-router-dom";

const CardsLocation = ({ appart }) => {
  console.log(appart);
  console.log(appart.id);

  return (
    <div>
      <article className="locationCards" key={appart.id}>
        <Link to={`/location/${appart.id}`}>
          <img src={appart.cover} alt={appart.title} className="imgCards" />
        </Link>
        <div className="infos">
          <h2 className="infosTitle">{appart.title}</h2>
        </div>
      </article>
    </div>
  );
};

export default CardsLocation;
