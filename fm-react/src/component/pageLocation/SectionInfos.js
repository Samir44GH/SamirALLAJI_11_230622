// import React, { useState } from "react";

import { useEffect } from "react";

const SectionInfos = (props) => {
  useEffect(() => console.log(props.location), []);
  // const [title, setTitle] = useState([]);
  // const [location, setLocation] = useState([]);
  // const [tags, setTags] = useState([]);
  // const [equipments, setEquipments] = useState([]);

  const textVisiblea = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (
      document.querySelector(".aSectionInfosa").classList.contains("disappear")
    ) {
      textDDVisiblea("appear");
      document
        .querySelector("#btnSectionInfosa")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisiblea("disappear");
      document
        .querySelector("#btnSectionInfosa")
        .setAttribute("aria-expanded", "false");
    }
    // // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasl").classList.contains("rotate")) {
      document.querySelector(".fasl").classList.remove("rotate");
    } else {
      document.querySelector(".fasl").classList.add("rotate");
    }
  };

  const textDDVisiblea = (para) => {
    document.querySelector(".aSectionInfosa").classList.contains("disappear");

    if (para === "appear") {
      document.querySelector(".aSectionInfosa").classList.remove("disappear");
    } else if (para === "disappear") {
      document.querySelector(".aSectionInfosa").classList.add("disappear");
    }
  };
  const textVisibleb = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (
      document.querySelector(".aSectionInfosb").classList.contains("disappear")
    ) {
      textDDVisibleb("appear");
      document
        .querySelector("#btnSectionInfosb")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisibleb("disappear");
      document
        .querySelector("#btnSectionInfosb")
        .setAttribute("aria-expanded", "false");
    }
    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasm").classList.contains("rotate")) {
      document.querySelector(".fasm").classList.remove("rotate");
    } else {
      document.querySelector(".fasm").classList.add("rotate");
    }
  };

  const textDDVisibleb = (para) => {
    document.querySelector(".aSectionInfosb").classList.contains("disappear");

    if (para === "appear") {
      document.querySelector(".aSectionInfosb").classList.remove("disappear");
    } else if (para === "disappear") {
      document.querySelector(".aSectionInfosb").classList.add("disappear");
    }
  };

  return (
    <div className="sectionInfos">
      <div className="infosLogement">
        <div className="infos1">
          <h2 className="infosTitleLoc">{props.location?.title}</h2>
          <h3 className="infosLocation">{props.location?.location}</h3>
          <ul className="infosTag">
            {props.location?.tags?.map((tag, index) => (
              <li className="tags" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="infosRN">
          <h2 className="infosRating">{props.location?.rating}</h2>
          <div className="infosHost">
            <h3 className="infosHostName">{props.location?.host?.name}</h3>
            <img
              src={props.location?.host?.picture}
              alt={props.location?.host?.name}
              className="infosHostPicture"
            />
          </div>
        </div>
      </div>
      <div className="dropDownLog">
        <div className="DD1">
          <nav className="divBtnArrowLog">
            <button className=" buttonDropDownLog">Description</button>

            <span
              class="fasl   btnArrowL"
              aria-hidden="true"
              id="btnSectionInfosa"
              onClick={textVisiblea}
            >
              <img
                src="http://localhost:3000/images/vector.png"
                className="fa-chevron-down"
                alt="flèche dirigée vers le haut"
              />
            </span>
          </nav>
          <article className="aSectionInfosa aSection1 aSectionInfos disappear">
            <p className="textSection1 textSectionLog">
              {props.location?.description}
            </p>
          </article>
        </div>
        <div className="DD2">
          <nav className="divBtnArrowLog">
            <button className=" buttonDropDownLog">Equipements</button>
            <span
              class="fasm   btnArrowM"
              aria-hidden="true"
              id="btnSectionInfosb"
              onClick={textVisibleb}
            >
              <img
                src="http://localhost:3000/images/vector.png"
                className="fa-chevron-down"
                alt="flèche dirigée vers le haut"
              />
            </span>
          </nav>
          <article className="aSectionInfosb aSection1 aSectionInfos flexE disappear">
            {props.location?.equipments?.map((eqmt, index) => (
              <p
                className="textSection1 textSectionLog textEquipments"
                key={index}
              >
                {eqmt}
              </p>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default SectionInfos;
