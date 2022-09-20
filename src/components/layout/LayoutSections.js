import React from "react";
import classes from "./LayoutSections.module.css";

const LayoutSections = ({
  children,
  className,
  subtitle,
  title,
  content,
  buttonText,
}) => {
  const styles = className + " " + classes.container;
  return (
    <section className={styles}>
      <div className={classes.background}></div>
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
