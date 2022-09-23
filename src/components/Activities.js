import React from "react";
import LayoutSections from "./layout/LayoutSections";
import classes from "./Activities.module.css";
import ImgActivity1 from "../assets/at-1.jpg";
import ImgActivity2 from "../assets/at-2.jpg";
import ImgActivity3 from "../assets/at-3.jpg";
import ImgActivity4 from "../assets/at-4.jpg";

const activities = [
  {
    src: ImgActivity1,
    id: "at1",
    name: "Escalada",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgActivity2,
    id: "at2",
    name: "Restaurante",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgActivity3,
    id: "at3",
    name: "Espaço kids",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
  {
    src: ImgActivity4,
    id: "at4",
    name: "Animais",
    descricao:
      "Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc malesuada sit amet arcu id pellentesque.",
  },
];

const Activities = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossas atividades"
        subtitle="O que você irá encontrar aqui"
      >
        <p className={classes.txt}>
          Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
          malesuada sit amet arcu id pellentesque.
        </p>
        <a href="/" className="btn-verde">
          Saiba mais
        </a>
      </LayoutSections>
      <ul className={classes.activitiesList}>
        {activities.map((activity) => (
          <li key={activity.id}>
            <img src={activity.src} alt={activity.name} />
            <h3>{activity.name}</h3>
            <p>{activity.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
