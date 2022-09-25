import React from "react";
import LayoutSections from "./layout/LayoutSections";
import classes from "./Valores.module.css";
import ImgGiraffe from "../assets/giraffe.png";

const Valores = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossos valores"
        subtitle="Vivamus justo mauris, semper eu iaculis"
        className={classes.content}
      >
        <ul className={classes.valuesList}>
          <li>Etiam dignissim eu ipsum tempus</li>
          <li>Sed quis convallis ex</li>
          <li>Fusce vehicula laoreet tortor</li>
        </ul>

        <a href="/" className="btn-verde">
          Sobre o Zoo
        </a>
      </LayoutSections>
      <div className={classes.img}>
        <img src={ImgGiraffe} alt="girafa" />
        <div className={classes.detail1}></div>
      </div>
    </section>
  );
};

export default Valores;
