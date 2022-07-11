import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardsLocation = ({ location }) => {
  console.log(location);

  console.log(useParams());
  const navigate = useNavigate();
  const goToLocation = (id) => {
    navigate(`/location/${id}`);
  };

  //Le UseEffect() se jour lorsque le composant est appelé

  return (
    <article
      className="locationCards"
      onClick={() => {
        goToLocation(location.id);
      }}
      // onClick={data.map((location, index) => (
      //   <Location key={index} location={location.id} />
      //   // <h1 key={index.rating}>{location.title}</h1>
      // ))}
    >
      <img src={location.cover} alt={location.title} className="imgCards" />

      <div className="infos">
        <h2 className="infosTitle">{location.title}</h2>
      </div>
    </article>
  );
};

export default CardsLocation;
