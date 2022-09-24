import React from "react";
import classes from "./LayoutSections.module.css";

const LayoutSections = ({ subtitle, title, children, className }) => {
  return (
    <div className={`${classes.content} ${className}`}>
      <span className={classes.subtitle}>{subtitle}</span>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default LayoutSections;
