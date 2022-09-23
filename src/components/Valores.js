import React from "react";
import LayoutSections from "./layout/LayoutSections";
import classes from "./Valores.module.css";
import ImgGiraffe from "../assets/giraffe.png";

const Valores = () => {
  return (
    <LayoutSections
      className={classes.container}
      title="Nossos valores"
      content="Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
  malesuada sit amet arcu id pellentesque."
      subtitle="O que você irá encontrar aqui"
      buttonText="Sobre o Zoo"
      classBg={classes.bg}
    >
      <div className={classes.img}>
        <img src={ImgGiraffe} alt="girafa" />
        <div className={classes.detail1}></div>
      </div>
    </LayoutSections>
  );
};

export default Valores;
