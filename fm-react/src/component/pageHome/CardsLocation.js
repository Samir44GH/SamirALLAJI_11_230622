import React from "react";

const CardsLocation = ({ location }) => {
  console.log(location);
  return (
    <article className="locationCards">
      <img src={location.cover} alt={location.title} className="imgCards" />
      <div className="infos">
        <h2 className="infosTitle">{location.title}</h2>
      </div>
    </article>
  );
};

export default CardsLocation;
