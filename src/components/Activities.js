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
    <LayoutSections
      className={classes.container}
      title="Nossas atividades"
      content="Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
    malesuada sit amet arcu id pellentesque."
      subtitle="O que você irá encontrar aqui"
      buttonText="Saiba mais"
      classBg={classes.bg}
    >
      <ul className={classes.activitiesList}>
        {activities.map((activity) => (
          <li key={activity.id}>
            <button>
              <img src={activity.src} alt={activity.name} />
            </button>
          </li>
        ))}
      </ul>
    </LayoutSections>
  );
};

export default Activities;
