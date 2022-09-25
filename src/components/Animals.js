import React from "react";
import classes from "./Animals.module.css";
import ImgAnimal1 from "../assets/an-1.jpg";
import ImgAnimal2 from "../assets/an-2.jpg";
import ImgAnimal3 from "../assets/an-3.jpg";
import ImgAnimal4 from "../assets/an-4.jpg";
import ImgAnimal5 from "../assets/an-5.jpg";
import LayoutSections from "./layout/LayoutSections";
import Slider from "./layout/Slider";

const animals = [
  {
    src: ImgAnimal1,
    id: "anima1",
    especie: "iguana",
    descricao:
      "Aliquam erat volutpat. Suspendisse lobortis lacus eu metus viverra vulputate.",
  },
  {
    src: ImgAnimal2,
    id: "anima2",
    especie: "leão",
    descricao:
      "Aenean at ipsum a eros sollicitudin fringilla. Nullam blandit nisi nec enim faucibus, in consequat nisi varius.",
  },
  {
    src: ImgAnimal3,
    id: "anima3",
    especie: "Flamingo",
    descricao:
      "Donec in massa eget sem consectetur pulvinar. Aliquam erat volutpat. Suspendisse lobortis lacus eu metus viverra vulputate.",
  },
  {
    src: ImgAnimal4,
    id: "anima4",
    especie: "Rinoceronte",
    descricao:
      " Curabitur sit amet volutpat nulla. Vivamus leo lorem, interdum eget consequat id, aliquet id metus.",
  },
  {
    src: ImgAnimal5,
    id: "anima5",
    especie: "mico-leão-dourado",
    descricao:
      "Aliquam tincidunt ante magna, bibendum fermentum dolor venenatis ut. Praesent ipsum nulla, sodales ac posuere quis, tristique eu leo.",
  },
];

const Animals = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossos animais"
        subtitle="O que você irá encontrar aqui"
        className={classes.content}
      >
        <p>
          Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
          malesuada sit amet arcu id pellentesque.
        </p>

        <a href="/" className={`btn-preto ${classes.link}`}>
          Todos os animais
        </a>
      </LayoutSections>
      <Slider className={classes.slider}>
        {animals.map((animal) => (
          <li key={animal.id} className={classes.itemAnimal}>
            <img src={animal.src} alt={animal.especie} />
            <h3>{animal.especie}</h3>

            <p>{animal.descricao}</p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default Animals;
