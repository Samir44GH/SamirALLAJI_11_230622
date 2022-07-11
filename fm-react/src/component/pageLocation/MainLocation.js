import React, { useEffect, useState } from "react";
import Lightbox from "./Lightbox";
import SectionInfos from "./SectionInfos";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router";

const MainLocation = () => {
  const [data, setData] = useState([1]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get("http://localhost:3000/logements.json").then((res) => {
      setData(res.data.filter((location) => location.id === id));
      console.clear();
      console.log(res.data);
    });
  }, []);

  return (
    <div className="mainLocation">
      {data.length > 0 ? (
        <>
          {data.map((location) => (
            <Lightbox key={location.id} location={location} />
          ))}
          {data.map((location) => (
            <SectionInfos key={location.id} location={location} />
          ))}
        </>
      ) : (
        <Navigate to="/Error" />
      )}
    </div>
  );
};

export default MainLocation;

// // récupération de la chaine de requête dans l'url
// const queryString_url_id = window.location.search;
// //console.log(queryString_url_id);

// //méthode pour extraire l'id
// const urlSearchParams = new URLSearchParams(queryString_url_id);
// // console.log(urlSearchParams);

// const logementId = urlSearchParams.get("id");
// // console.log(id);

// .array.forEach((element) => {
//   if (parseInt(logementId) === element.id) {
//     setData(element);
//   }
// });

// .map((location) => (
//   <SectionInfos key={location.id} location={location} />
// ))
