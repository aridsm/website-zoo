import React from "react";
import classes from "./Faq.module.css";
import LayoutSections from "./layout/LayoutSections";
import ImgFaq from "../assets/img-faq.jpg";

const Faq = () => {
  return (
    <LayoutSections
      className={classes.container}
      title="FAQ"
      content="Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
  malesuada sit amet arcu id pellentesque."
      subtitle="Perguntas frequentes"
    >
      <div className={classes.imgContainer}>
        <img src={ImgFaq} alt="gorila" />
      </div>
    </LayoutSections>
  );
};

export default Faq;
