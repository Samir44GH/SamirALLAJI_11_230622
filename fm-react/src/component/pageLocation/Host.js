import React from "react";

const Host = ({ hostNP }) => {
  return (
    <div className="infosHost">
      <h3 className="infosHostName">{hostNP.location?.host?.name}</h3>
      <img
        src={hostNP.location?.host?.picture}
        alt={hostNP.location?.host?.name}
        className="infosHostPicture"
      />
    </div>
  );
};

export default Host;
