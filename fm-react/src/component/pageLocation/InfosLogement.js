import React from "react";
import { useEffect } from "react";

const InfosLogement = ({ Loc }) => {
  useEffect(() => console.log(Loc.location), []);
  return (
    <div className="infos1">
      <h2 className="infosTitleLoc">{Loc.location?.title}</h2>
      <h3 className="infosLocation">{Loc.location?.location}</h3>
      <div className="infosTag">
        {" "}
        {Loc.location?.tags?.map((tag, index) => (
          <div className="containerTags">
            <p className="tags" key={index}>
              {tag}
            </p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfosLogement;

{
  /* {[...newArray(props.location?.rating)].map(() => (
              <AiFillStar />
            ))} */
}

{
  /* <div className="infosRN">
          <h2 className="infosRating">{props.location?.rating}</h2>
          <div className="infosHost">
            <h3 className="infosHostName">{props.location?.host?.name}</h3>
            <img
              src={props.location?.host?.picture}
              alt={props.location?.host?.name}
              className="infosHostPicture"
            />
          </div>
        </div> */
}
