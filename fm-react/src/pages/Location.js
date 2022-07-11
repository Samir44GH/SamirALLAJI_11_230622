import React from "react";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import MainLocation from "../component/pageLocation/MainLocation";
// import { useParams } from "react-router-dom";
// import BodyLocation from "../component/pageLocation/BodyLocation";
// import axios from "./CardsLocation";

const Location = () => {
  // const [data, setData] = useState([]);
  // //Le UseEffect() se jour lorsque le composant est appelé
  // useEffect(() => {
  //   axios.get("./logements.json").then((res) => setData(res.data));
  // }, []);
  // console.log(useParams());

  return (
    <div>
      <Header />
      <MainLocation />
      {/* {data.map((location, index) => (
        <BodyLocation key={index} location={location} />
        // <h1 key={index.rating}>{location.title}</h1>
      ))} */}
      <Footer />
    </div>
  );
};

export default Location;
