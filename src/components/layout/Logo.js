import React from "react";
import classes from "./Logo.module.css";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
const Logo = ({ className }) => {
  return (
    <span className={`${classes.logo} ${className}`}>
      <LogoSvg />
      <div>Zoo</div>
    </span>
  );
};

export default Logo;
