import React, { useEffect, useRef, useState } from "react";
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
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const refBtn = useRef();

  useEffect(() => {
    const checkClickTarget = (e) => {
      if (e.target !== refBtn.current && !refBtn.current.contains(e.target)) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener("click", checkClickTarget);

    return () => window.removeEventListener("click", checkClickTarget);
  }, []);

  const openMenuHandler = () => {
    setIsMenuVisible((currState) => !currState);
  };

  return (
    <header className={classes.header}>
      <a href="/">
        <Logo />
      </a>
      <nav className={`${classes.nav} ${isMenuVisible ? classes.visible : ""}`}>
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
      <button
        className={`${classes.menuBtn} ${isMenuVisible ? classes.visible : ""}`}
        ref={refBtn}
        onClick={openMenuHandler}
        aria-label="menu"
      >
        <div className={classes.btnDash}></div>
      </button>
    </header>
  );
};

export default Header;
