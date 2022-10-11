import React, { useEffect, useState } from "react";
import Caroussel from "./Caroussel";
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
  }, [id]);

  return (
    <div className="mainLocation">
      {data.length > 0 ? (
        <>
          {data.map((location) => (
            <Caroussel key={location.id} location={location} />
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
