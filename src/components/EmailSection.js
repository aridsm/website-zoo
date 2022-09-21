import React from "react";

const EmailSection = () => {
  return (
    <section>
      <h2>Fique por dentro das promoções e novidades!</h2>
      <form>
        <label htmlFor="email">Seu email</label>
        <input type="email" placeholder="exemplo@email.com" id="email" />
        <input type="submit" value="Inscreva-se" />
      </form>
    </section>
  );
};

export default EmailSection;
