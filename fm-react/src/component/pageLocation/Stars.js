import React, { useEffect } from "react";

import { IoStarSharp } from "react-icons/io5";

const Stars = ({ staring }) => {
  useEffect(() => console.log(staring), []);

  const rate = (nbRate) => {
    const rating = parseInt(nbRate);
    const maxRate = 5;
    // if (rating) for (let i = 0; i < maxRate; i++);
    const totalRate = maxRate - rating;
    return totalRate;
  };

  return (
    <h2 className="infosRating">
      {staring.location?.rating &&
        [...Array(parseInt(staring.location?.rating))].map(() => {
          // console.log(Array.length);
          return <IoStarSharp color="#FF6060" className="starImg" />;
        })}
      {staring.location?.rating &&
        [...Array(rate(parseInt(staring.location?.rating)))].map(() => {
          return <IoStarSharp className="starImg" color="#E3E3E3" />;
        })}
    </h2>
  );
};

export default Stars;

/* {rateFull(staring.location?.rating, "ratingList")} */

// const rateGet = (ratingFullNbr, elId) => {
//   const maxRates = 5;
//   const ratingFull = parseInt(ratingFullNbr);
//   let elemId = document.getElementById(elId);

//   if (ratingFull && !rateIsFull) {
//     for (let index = 0; index < ratingFull; index++) rateFullImg(elId);
//     if (elemId.children.length === ratingFull) setRateIsFull();
//   }
//   if (rateIsFull && elemId.children.length !== maxRates) rateEmptyImg(elId);
// };
