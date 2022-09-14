// import React, { useState } from "react";
import { useEffect } from "react";
import InfosLogement from "./InfosLogement";
import Stars from "./Stars";
import Host from "./Host";
import Dropdown from "./DropDown";
import Dropdown2 from "./DropDown2";

const SectionInfos = (props) => {
  useEffect(() => console.log(props.location), []);

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
        <Dropdown title="Description" DD={props.location?.description} />
        <Dropdown2 title="Equipements" DD={props.location?.equipments} />
      </div>
      {/* <Dropdown title="Equipements" DD={props.location?.equipments} /> */}
    </div>
  );
};

export default SectionInfos;
