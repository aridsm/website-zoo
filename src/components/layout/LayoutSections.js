import React from "react";
import classes from "./LayoutSections.module.css";

const LayoutSections = ({
  children,
  className,
  subtitle,
  title,
  content,
  buttonText,
  classBg,
}) => {
  const styles = className + " " + classes.container;
  const stylesBg = classBg + " " + classes.background;
  return (
    <section className={styles}>
      <div className={stylesBg}></div>
      <div className={classes.content}>
        <span>{subtitle}</span>
        <h2>{title}</h2>
        <p className={classes.description}>{content}</p>
        {buttonText && (
          <a href="/" className="btn-amarelo">
            {buttonText}
          </a>
        )}
      </div>
      {children}
    </section>
  );
};

export default LayoutSections;
