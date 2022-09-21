import React, { useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";
import ImgLogo from "../assets/img-logo.png";
import MenuNavHeader from "./MenuNavHeader";

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [didPageScroll, setDidPageScroll] = useState(false);

  const btnRef = useRef();

  useEffect(() => {
    const closeMenuHandler = (e) => {
      if (e.target !== btnRef.current && !btnRef.current.contains(e.target)) {
        setNavIsVisible(false);
      }
    };

    window.addEventListener("click", closeMenuHandler);
    return () => window.removeEventListener("click", closeMenuHandler);
  }, []);

  useEffect(() => {
    const checkScrollPage = (e) => {
      if (window.scrollY > 0) setDidPageScroll(true);
      else setDidPageScroll(false);
    };
    window.addEventListener("scroll", checkScrollPage);
    return () => window.removeEventListener("scroll", checkScrollPage);
  }, []);

  return (
    <header
      className={`${classes.header} ${
        didPageScroll ? classes.headerScrolled : ""
      }`}
    >
      <div className={classes.headerContainer}>
        <span className={classes.logo}>
          <img src={ImgLogo} alt="logo de tucano" />
          <div>Zoo</div>
        </span>
        <a href="/" className={`btn-amarelo ${classes.btnDonation}`}>
          Faça uma doação
        </a>
        <a href="/" className="btn-amarelo">
          Compre seu ingresso
        </a>
        <button
          className={`${classes.menuBtn} ${
            navIsVisible ? classes.visible : ""
          }`}
          aria-label={navIsVisible ? "fechar menu" : "abrir menu"}
          onClick={() => setNavIsVisible((prev) => !prev)}
          ref={btnRef}
        >
          <div />
        </button>
        <MenuNavHeader navIsVisible={navIsVisible} />
      </div>
    </header>
  );
};

export default Header;
