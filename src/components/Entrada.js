import React from "react";
import classes from "./Entrada.module.css";
import ImgEntrada1 from "../assets/img-entrada-1.jpg";
import ImgEntrada2 from "../assets/img-entrada-2.jpg";
import ImgEntrada3 from "../assets/img-entrada-3.jpg";
import ImgEntrada4 from "../assets/img-entrada-4.jpg";
import ImgEntrada5 from "../assets/img-entrada-5.jpg";
import ImgLogo from "../assets/img-logo.png";

const images = [
  { src: ImgEntrada1, name: "camaleão" },
  { src: ImgEntrada2, name: "ave" },
  { src: ImgEntrada3, name: "leões" },
];

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <img src={ImgEntrada2} alt="camaleão" />
      <ul className={classes.valuesList}>
        <li>
          <span>3192</span>
          <pattern>animais</pattern>
        </li>
        <li>
          <span>341</span>
          <p>espécies</p>
        </li>
        <li>
          <span>20+</span>
          <p>espaços de lazer</p>
        </li>
      </ul>
      <div className={classes.content}>
        <div className={classes.titleAndTexts}>
          <h1>
            Lorem ipsum <br /> dolor sit amet
          </h1>
          <p className={classes.description}>
            Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
            malesuada sit amet arcu id pellentesque.
          </p>
          <button className="btn-amarelo">Compre o seu ingresso</button>
        </div>
      </div>
    </section>
  );
};

export default Entrada;
