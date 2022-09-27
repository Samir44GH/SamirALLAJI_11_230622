import React from "react";
import { useState } from "react";

const Dropdown = ({ DD, title }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="dropDownLog">
      <div className="DD1">
        <nav className="divBtnArrowLog">
          <button className=" buttonDropDownLog">{title}</button>

          <span
            //class="fasl  btnArrowL"
            className={active ? "  btnArrowM rotate" : "   btnArrowM inrotate"}
            aria-hidden="true"
            id="btnSectionInfosa"
            onClick={(e) => setActive(!active)}
          >
            <img
              src="http://localhost:3000/SamirALLAJI_11_230622/images/vector.png"
              className="fa-chevron-down"
              alt="flèche dirigée vers le haut"
            />
          </span>
        </nav>
        <article
          //className="aSectionInfosa aSection1 aSectionInfos disappear"//
          className={
            active ? " aSectionInfosa aSection1 aSectionInfos" : "disappear"
          }
        >
          <p className="textSection1 textSectionLog textDescription">{DD}</p>
        </article>
      </div>
    </div>
  );
};

export default Dropdown;
