import React, { useEffect, useState } from "react";
import Lightbox from "./Lightbox";
import SectionInfos from "./SectionInfos";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router";

const MainLocation = () => {
  const [data, setData] = useState([1]);
  // const [dataLoading, setDataLoading] = useState(false);
  const { id } = useParams();

  // const [tags, setTags] = useState([]);
  // const [equipments, setEquipments] = useState([]);
  // const [pictures, setPictures] = useState([]);
  // const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    // setDataLoading(true);
    axios.get("http://localhost:3000/logements.json").then((res) => {
      setData(res.data.filter((location) => location.id === id));
      // setDataLoading(false);
      // setTags(data);
      // setEquipments(res.data.equipments);
      // setPictures(res.data.pictures);

      console.clear();
      console.log(res.data);
    });
  }, [id]);

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
