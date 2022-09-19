import React from "react";
import classes from "./Animals.module.css";
import ImgAnimal1 from "../assets/an-1.jpg";
import ImgAnimal2 from "../assets/an-2.jpg";
import ImgAnimal3 from "../assets/an-3.jpg";
import ImgAnimal4 from "../assets/an-4.jpg";
import ImgAnimal5 from "../assets/an-5.jpg";

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
    <section className={classes.animalsContainer}>
      <div className={classes.background}></div>
      <div className={classes.content}>
        <span>O que você irá encontrar aqui</span>
        <h2>
          Nossos <br /> animais
        </h2>
        <p className={classes.descricao}>
          Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
          malesuada sit amet arcu id pellentesque.
        </p>
        <button className="btn-amarelo">Todos os animais</button>
      </div>
      <ul className={classes.animalsList}>
        {animals.map((animal) => (
          <li>
            <button>
              <img src={animal.src} alt={animal.name} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Animals;
