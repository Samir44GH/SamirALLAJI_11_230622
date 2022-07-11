import React from "react";
const Section1 = () => {
  const textVisiblea = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (document.querySelector(".aSection1a").classList.contains("disappear")) {
      textDDVisiblea("appear");
      document
        .querySelector("#btnSection1a")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisiblea("disappear");
      document
        .querySelector("#btnSection1a")
        .setAttribute("aria-expanded", "false");
    }
    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasa").classList.contains("rotate")) {
      document.querySelector(".fasa").classList.remove("rotate");
    } else {
      document.querySelector(".fasa").classList.add("rotate");
    }
  };
  const textVisibleb = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (document.querySelector(".aSection1b").classList.contains("disappear")) {
      textDDVisibleb("appear");
      document
        .querySelector("#btnSection1b")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisibleb("disappear");
      document
        .querySelector("#btnSection1b")
        .setAttribute("aria-expanded", "false");
    }
    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasb").classList.contains("rotate")) {
      document.querySelector(".fasb").classList.remove("rotate");
    } else {
      document.querySelector(".fasb").classList.add("rotate");
    }
  };

  const textVisiblec = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (document.querySelector(".aSection1c").classList.contains("disappear")) {
      textDDVisiblec("appear");
      document
        .querySelector("#btnSection1c")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisiblec("disappear");
      document
        .querySelector("#btnSection1c")
        .setAttribute("aria-expanded", "false");
    }
    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasc").classList.contains("rotate")) {
      document.querySelector(".fasc").classList.remove("rotate");
    } else {
      document.querySelector(".fasc").classList.add("rotate");
    }
  };

  const textVisibled = () => {
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (document.querySelector(".aSection1d").classList.contains("disappear")) {
      textDDVisibled("appear");
      document
        .querySelector("#btnSection1d")
        .setAttribute("aria-expanded", "true");
    } else {
      textDDVisibled("disappear");
      document
        .querySelector("#btnSection1d")
        .setAttribute("aria-expanded", "false");
    }
    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fasd").classList.contains("rotate")) {
      document.querySelector(".fasd").classList.remove("rotate");
    } else {
      document.querySelector(".fasd").classList.add("rotate");
    }
  };

  // const textDDVisible = (a, b, c, d) => {
  //   document.querySelector(".aSection1a").classList.contains("disappear");
  //   document.querySelector(".aSection1b").classList.contains("disappear");
  //   document.querySelector(".aSection1c").classList.contains("disappear");
  //   document.querySelector(".aSection1d").classList.contains("disappear");

  //   if (a === "appear") {
  //     document.querySelector(".aSection1a").classList.remove("disappear");
  //   }
  //   if (b === "appear") {
  //     document.querySelector(".aSection1b").classList.remove("disappear");
  //   }
  //   if (c === "appear") {
  //     document.querySelector(".aSection1c").classList.remove("disappear");
  //   }
  //   if (d === "appear") {
  //     document.querySelector(".aSection1d").classList.remove("disappear");
  //   }

  //   else if (a === "disappear") {
  //     document.querySelector(".aSection1a").classList.add("disappear");
  //   } else if (b === "disappear") {
  //     document.querySelector(".aSection1b").classList.add("disappear");
  //   } else if (c === "disappear") {
  //     document.querySelector(".aSection1c").classList.add("disappear");
  //   } else if (d === "disappear") {
  //     document.querySelector(".aSection1d").classList.add("disappear");
  //   }
  // };

  const textDDVisiblea = (para) => {
    document.querySelector(".aSection1a").classList.contains("disappear");

    if (para === "appear") {
      document.querySelector(".aSection1a").classList.remove("disappear");
    } else if (para === "disappear") {
      document.querySelector(".aSection1a").classList.add("disappear");
    }
  };

  const textDDVisibleb = (para) => {
    document.querySelector(".aSection1b").classList.contains("disappear");
    if (para === "appear") {
      document.querySelector(".aSection1b").classList.remove("disappear");
    } else if (para === "disappear") {
      document.querySelector(".aSection1b").classList.add("disappear");
    }
  };

  const textDDVisiblec = (para) => {
    document.querySelector(".aSection1c").classList.contains("disappear");
    if (para === "appear") {
      document.querySelector(".aSection1c").classList.remove("disappear");
    } else if (para === "disappear") {
      document.querySelector(".aSection1c").classList.add("disappear");
    }
  };

  const textDDVisibled = (para) => {
    document.querySelector(".aSection1d").classList.contains("disappear");
    if (para === "appear") {
      document.querySelector(".aSection1d").classList.remove("disappear");
    } else if (para === "disappear") {
      document.querySelector(".aSection1d").classList.add("disappear");
    }
  };

  return (
    <section className="section1">
      <nav className="divBtnArrow">
        <button className="buttonDropDown contact_button">Fiabilité </button>
        <span
          class="fasa  btnArrow"
          aria-hidden="true"
          id="btnSection1a"
          onClick={textVisiblea}
        >
          <img
            src="./images/vector.png"
            className="fa-chevron-down"
            alt="flèche dirigée vers le haut"
          />
        </span>
      </nav>

      <article className="aSection1a aSection1 disappear">
        <p className="textSection1">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </article>
      <nav className="divBtnArrow">
        <button className="buttonDropDown contact_button">Respect</button>
        <span
          class="fasb  btnArrow"
          aria-hidden="true"
          id="btnSection1b"
          onClick={textVisibleb}
        >
          <img
            src="./images/vector.png"
            className="fa-chevron-down"
            alt="flèche dirigée vers le haut"
          />
        </span>
      </nav>
      <article className="aSection1 aSection1b disappear">
        <p className="textSection1">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </article>
      <nav className="divBtnArrow">
        <button className="buttonDropDown contact_button">Service</button>
        <span
          class="fasc  btnArrow"
          aria-hidden="true"
          id="btnSection1c"
          onClick={textVisiblec}
        >
          <img
            src="./images/vector.png"
            className="fa-chevron-down"
            alt="flèche dirigée vers le haut"
          />
        </span>
      </nav>
      <article className="aSection1 aSection1c disappear">
        <p className="textSection1">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </article>
      <nav className="divBtnArrow">
        <button className="buttonDropDown contact_button">Sécurité</button>
        <span
          class="fasd  btnArrow"
          aria-hidden="true"
          id="btnSection1d"
          onClick={textVisibled}
        >
          <img
            src="./images/vector.png"
            className="fa-chevron-down"
            alt="flèche dirigée vers le haut"
          />
        </span>
      </nav>
      <article className="aSection1 aSection1d disappear">
        <p className="textSection1">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </article>
    </section>
  );
};

export default Section1;
