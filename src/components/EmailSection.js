import React from "react";
import classes from "./EmailSection.module.css";

const EmailSection = () => {
  return (
    <section className={classes.section}>
      <h2>Fique por dentro das promoções e novidades!</h2>
      <form className={classes.form}>
        <label htmlFor="email">Seu email</label>
        <input
          type="email"
          placeholder="exemplo@email.com"
          id="email"
          className={classes.email}
        />
        <button className={`btn-preto ${classes.btn}`}>Inscreva-se</button>
      </form>
    </section>
  );
};

export default EmailSection;
