import React, { useState } from "react";

const Collapse = ({ dropAbout, title }) => {
  const [activeDD, setActiveDD] = useState(false);

  return (
    <section className="section1">
      <nav className="divBtnArrow">
        <button className="buttonDropDown contact_button">{title}</button>
        <span
          className={activeDD ? " btnArrow  rotate" : "  btnArrow inrotate"}
          aria-hidden="true"
          id="btnSection1a"
          onClick={(e) => setActiveDD(!activeDD)}
        >
          <img
            src="	http://localhost:3000/SamirALLAJI_11_230622/images/vector.png"
            className="fa-chevron-down"
            alt="flèche dirigée vers le haut"
          />
        </span>
      </nav>

      <article className={activeDD ? " aSection1a aSection1" : "disappear"}>
        <p className="textSection"> {dropAbout}</p>
      </article>
    </section>
  );
};

export default Collapse;
