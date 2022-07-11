import React from "react";

const SectionInfos = ({ location }) => {
  return (
    <div className="sectionInfos">
      <div>
        <h2 className="sectionInfosTitle">{location.title}</h2>
        <h3 className="sectionInfosLocation">{location.location} </h3>

        {/* <ul className="infosTags">
          <li className="tags">{location.tags[0]}</li>
          <li className="tags">{location.tags}</li>
          <li className="tags">{location.tags}</li>
        </ul> */}
      </div>

      <div className="infosRN">
        <h2 className="infosRating">{location.rating}</h2>

        <div className="infosHost">
          <h1 className="infosHostName">{location.host}</h1>

          <img
            src={location.host}
            alt={location.host}
            className="infosHostPicture"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionInfos;
