import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardsLocation = ({ location }) => {
  console.log(location);

  console.log(useParams());
  const navigate = useNavigate();

  const goToLocation = (id) => {
    navigate(`/location/${id}`);
  };

  // const [data, setData] = useState([1]);
  // const { id } = useParams();

  // useEffect(() => {
  //   console.log(id);
  //   axios.get("http://localhost:3000/logements.json").then((res) => {
  //     setData(res.data.filter((location) => location.id === id));
  //     console.clear();
  //     console.log(res.data);
  //   }, []);
  // });

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
