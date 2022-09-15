import React, { useState } from "react";

const DDabout = ({ dropAbout }) => {
  const [activeDD, setActiveDD] = useState(false);

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
        <p className="textSection">{dropAbout.text}</p>
      </article>
    </section>
  );
};

export default DDabout;
