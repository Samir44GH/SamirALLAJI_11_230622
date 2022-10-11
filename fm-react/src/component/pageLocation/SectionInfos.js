// import React, { useState } from "react";
import { useEffect } from "react";
import InfosLogement from "./InfosLogement";
import Stars from "./Stars";
import Host from "./Host";
import Collapse from "../layout/Collapse";

const SectionInfos = (props) => {
  useEffect(() => console.log(props.location));
  const appartEqts = props.location.equipments?.map((eqmt, index) => (
    <p className="textSection1 textSectionLog textEquipments" key={index}>
      {eqmt}
    </p>
  ));

  return (
    <div className="sectionInfos">
      <div className="infosLogement">
        <InfosLogement Loc={props} />
        <div className="infosRN">
          <Stars staring={props} />
          <Host hostNP={props} />
        </div>
      </div>
      <div className="menuDD">
       <Collapse title="Description" dropAbout={props.location.description} />
        <Collapse title="Equipements" dropAbout={appartEqts} />
      </div>
     
    </div>
  );
};

export default SectionInfos;
