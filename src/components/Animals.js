import React from "react";
import classes from "./Animals.module.css";
import ImgAnimal1 from "../assets/an-1.jpg";
import ImgAnimal2 from "../assets/an-2.jpg";
import ImgAnimal3 from "../assets/an-3.jpg";
import ImgAnimal4 from "../assets/an-4.jpg";
import ImgAnimal5 from "../assets/an-5.jpg";
import LayoutSections from "./layout/LayoutSections";

const animals = [
  {
    src: ImgAnimal1,
    id: "anima1",
    name: "Léo",
    especie: "leão",
    nomeCientifico: "phantera leo",
    idade: "6 anos",
    gênero: "macho",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgAnimal2,
    id: "anima2",
    name: "Léo",
    especie: "leão",
    nomeCientifico: "phantera leo",
    idade: "6 anos",
    gênero: "macho",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgAnimal3,
    id: "anima3",
    name: "Léo",
    especie: "leão",
    nomeCientifico: "phantera leo",
    idade: "6 anos",
    gênero: "macho",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgAnimal4,
    id: "anima4",
    name: "Léo",
    especie: "leão",
    nomeCientifico: "phantera leo",
    idade: "6 anos",
    gênero: "macho",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgAnimal5,
    id: "anima5",
    name: "Léo",
    especie: "leão",
    nomeCientifico: "phantera leo",
    idade: "6 anos",
    gênero: "macho",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
];

const Animals = () => {
  return (
    <LayoutSections
      className={classes.container}
      title="Nossos animais"
      content="Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
      malesuada sit amet arcu id pellentesque."
      subtitle="O que você irá encontrar aqui"
      buttonText="Todos os animais"
    >
      <ul className={classes.animalsList}>
        {animals.map((animal) => (
          <li key={animal.id}>
            <button>
              <img src={animal.src} alt={animal.name} />
            </button>
          </li>
        ))}
      </ul>
    </LayoutSections>
  );
};

export default Animals;