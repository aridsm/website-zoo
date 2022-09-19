import React from "react";
import classes from "./Entrada.module.css";
import ImgEntrada1 from "../assets/img-entrada-1.jpg";

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <img src={ImgEntrada1} alt="camaleão" />
    </section>
  );
};

export default Entrada;
