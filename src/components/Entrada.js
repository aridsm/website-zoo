import React from "react";
import classes from "./Entrada.module.css";
import ImgEntrada1 from "../assets/img-entrada-1.jpg";
import ImgEntrada2 from "../assets/img-entrada-2.jpg";
import ImgEntrada3 from "../assets/img-entrada-3.jpg";
import ImgEntrada4 from "../assets/img-entrada-4.jpg";
import ImgLogo from "../assets/img-logo.png";
import { ReactComponent as IconFacebook } from "../assets/facebook.svg";
import { ReactComponent as IconInstagram } from "../assets/instagram.svg";
import { ReactComponent as IconYoutube } from "../assets/youtube.svg";

const images = [
  { src: ImgEntrada1, name: "camaleão" },
  { src: ImgEntrada2, name: "ave" },
  { src: ImgEntrada3, name: "leões" },
];

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <img src={ImgEntrada1} alt="camaleão" />
      <div className={classes.btnsAndMedia}>
        <div className={classes.btnsImages}>
          {images.map((image) => (
            <button key={image.name} className={classes.btnImage} />
          ))}
        </div>
        <address className={classes.media}>
          <a href="/">
            <IconFacebook />
          </a>
          <a href="/">
            <IconInstagram />
          </a>
          <a href="/">
            <IconYoutube />
          </a>
        </address>
      </div>
      <div className={classes.content}>
        <span className={classes.tel}>+00 12345-6789</span>
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
      <div className={classes.logoContainer}>
        <span className={classes.logo}>
          <img src={ImgLogo} alt="logo de tucano" />
          <div>Zoo</div>
        </span>
      </div>
    </section>
  );
};

export default Entrada;
