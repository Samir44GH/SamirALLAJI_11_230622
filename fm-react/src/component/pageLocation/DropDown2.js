import React from "react";
import { useState } from "react";

const Dropdown2 = ({ DD, title }) => {
  const [active1, setActive1] = useState(false);

  return (
    <div className="dropDownLog">
      <div className="DD1 flexC">
        <nav className="divBtnArrowLog flexE">
          <button className=" buttonDropDownLog">{title}</button>

          <span
            //class="fasl  btnArrowL"
            className={active1 ? " btnArrowL  rotate" : "  btnArrowL  inrotate"}
            aria-hidden="true"
            id="btnSectionInfosa"
            onClick={(e) => setActive1(!active1)}
          >
            <img
              src="http://localhost:3000/images/vector.png"
              className="fa-chevron-down"
              alt="flèche dirigée vers le haut"
            />
          </span>
        </nav>
        <article
          //className="aSectionInfosa aSection1 aSectionInfos disappear"//
          className={
            active1
              ? " aSectionInfosa aSection1 aSectionInfos flexE"
              : "disappear"
          }
        >
          {DD?.map((eqmt, index) => (
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
  );
};

export default Dropdown2;
