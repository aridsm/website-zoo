import React from "react";
import classes from "./MenuNavHeader.module.css";

const MenuNavHeader = ({ navIsVisible }) => {
  const styles = `${classes.nav} ${navIsVisible ? classes.visible : ""}`;

  return (
    <nav className={styles}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Atividades</a>
        </li>
        <li>
          <a href="/">Animais</a>
        </li>
        <li>
          <a href="/">Mapa</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
        <li>
          <a href="/">Sobre</a>
        </li>
        <li>
          <a href="/">Faq</a>
        </li>
        <li>
          <a href="/">Compre seu ingresso</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavHeader;
