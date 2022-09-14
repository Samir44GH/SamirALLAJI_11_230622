import React, { useState } from "react";

const DDabout = ({ dropAbout }) => {
  const [activeDD, setActiveDD] = useState(false);

  const textVisible = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (document.querySelector(".aSection1a").classList.contains("disappear")) {
      textDDVisible("appear");
      document
        .querySelector("#btnSection1a")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisible("disappear");
      document
        .querySelector("#btnSection1a")
        .setAttribute("aria-expanded", "false");
    }

    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasa").classList.contains("rotate")) {
      document.querySelector(".fasa").classList.remove("rotate");
    } else {
      document.querySelector(".fasa").classList.add("rotate");
    }
  };

  const textDDVisible = (e) => {
    document.querySelector(".aSection1a").classList.contains("disappear");

    if (e === "appear") {
      document.querySelector(".aSection1a").classList.remove("disappear");
    } else if (e === "disappear") {
      document.querySelector(".aSection1a").classList.add("disappear");
    }
  };

  return (
    <section className="section1">
      <nav className="divBtnArrow">
        <button className="buttonDropDown contact_button">
          {dropAbout.title}
        </button>
        <span
          //className="fasa  btnArrow"
          className={activeDD ? " btnArrow  rotate" : "  btnArrow inrotate"}
          aria-hidden="true"
          id="btnSection1a"
          //onClick={textVisible}
          onClick={(e) => setActiveDD(!activeDD)}
        >
          <img
            src="http://localhost:3000/images/vector.png"
            className="fa-chevron-down"
            alt="flèche dirigée vers le haut"
          />
        </span>
      </nav>

      <article
        className={activeDD ? " aSection1a aSection1" : "disappear"}

        //className="aSection1a aSection1 disappear"
      >
        <p className="textSection1">{dropAbout.text}</p>
      </article>
    </section>
  );
};

export default DDabout;
