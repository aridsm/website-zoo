import React from "react";
import classes from "./Entrada.module.css";
import MediasLink from "./layout/MediasLink";
import Logo from "./layout/Logo";
import { ReactComponent as IconPin } from "../assets/pin.svg";

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <header className={classes.header}>
        <Logo className={classes.logo} />
        <MediasLink className={classes.linksMedia} />
        <a className="btn-verde" href="/">
          Faça uma doação
        </a>
      </header>

      <div className={classes.entradaContainer}>
        <div className={classes.titleAndTexts}>
          <p className={classes.description}>
            Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
            malesuada sit amet arcu id pellentesque.
          </p>

          <h1>Proin purus neque, blandit et feugiat eget, posuere id velit</h1>

          <a href="/" className="btn-verde">
            Compre o seu ingresso
          </a>
        </div>

        <div className={classes.aside}>
          <ul>
            <li>
              <span>2506</span>
              <p>animais</p>
            </li>
            <li>
              <span>315</span>
              <p>espécies</p>
            </li>
            <li>
              <span>+20</span>
              <p>espaços de lazer</p>
            </li>
          </ul>

          <address>
            <span>
              Lorem ipsum - 12 <IconPin />
            </span>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Entrada;
