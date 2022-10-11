import React from "react";
import Collapse from "../layout/Collapse";

const Section = () => {
  const dropAbouts = [
    {
      id: "0",
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      btn: "btnSection",
    },
    {
      id: "1",
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      btn: "btnSection2",
    },
    {
      id: "2",
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      btn: "btnSection3",
    },
    {
      id: "3",
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      btn: "btnSection4",
    },
  ];

  return (
    <div>
      {Collapse.map((dropAbout, index) => (
        <DDabout index={index}  dropAbout={dropAbout.text} title={dropAbout.title} />
      ))}
    </div>
  );
};
export default Section;
