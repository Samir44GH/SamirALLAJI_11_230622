import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Caroussel = (props) => {
  useEffect(() => console.log(props.location), []);
  const [imageCur, setImageCur] = useState(0);

  //let carousselEl = document.querySelector(".caroussel1");
  // let imageCur = -1;

  // const hideEl = () => {
  //   //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
  //   for (let OnEl of carousselEl.children) {
  //     OnEl.style.display = "none";
  //   }
  // };
  // console.log(hideEl());

  //Création de la fonction qui permet de passer à l'image suivante
  const SuivImg = (e = {}) => {
    console.log("hello");

    // hideEl();
    setImageCur(
      [...[Math.abs(1 + imageCur) % props.location?.pictures?.length]][0]
    );
    console.log(imageCur);
  };

  //Création de la fonction qui permet de revenir à l'image précédente
  const PrecImg = (e = {}) => {
    console.log("bye");

    // hideEl();

    setImageCur(
      [...[Math.abs(1 - (imageCur % props.location?.pictures?.length))]][0]
    );
    console.log(imageCur);
  };

  return (
    <div className="caroussel">
      <div className="caroussel1">
        {imageCur >= 0 &&
          props.location?.pictures?.map((pictures, index) => (
            <div className="containerPictures">
              <img
                src={pictures}
                alt={props.location?.title}
                className={
                  index === imageCur ? "carousselPic vue" : "carousselPic nvue"
                }
                key={index}
              />{" "}
            </div>
          ))}
      </div>
      <IoIosArrowForward className="arrowF" onClick={SuivImg} />
      <IoIosArrowBack className="arrowB" onClick={PrecImg} />
    </div>
  );
};

export default Caroussel;
