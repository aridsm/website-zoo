import React from "react";
import classes from "./Header.module.css";
import MediasLink from "./layout/MediasLink";
import Logo from "./layout/Logo";

const listLinks = [
  { route: "animais", description: "conheça nossos animais" },
  { route: "atividades", description: "o que fazer aqui" },
  { route: "mapa", description: "mapa do zoo" },
  { route: "sobre", description: "conheça nossa história" },
  { route: "contato", description: "fale conosco" },
  { route: "faq", description: "perguntas frequentes" },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/">
        <Logo />
      </a>
      <nav className={classes.nav}>
        <ul>
          {listLinks.map((link) => (
            <li key={link.route}>
              <a href="/">
                <span>{link.route}</span>
                <p>{link.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <MediasLink />
    </header>
  );
};

export default Header;
