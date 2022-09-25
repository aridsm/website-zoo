import React from "react";
import LayoutSections from "./layout/LayoutSections";
import classes from "./Activities.module.css";
import ImgActivity1 from "../assets/at-1.jpg";
import ImgActivity2 from "../assets/at-2.jpg";
import ImgActivity3 from "../assets/at-3.jpg";
import ImgActivity4 from "../assets/at-4.jpg";
import Slider from "./layout/Slider";

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
      "Sed ac enim in purus tempor mattis. Morbi luctus lobortis eleifend.",
  },
  {
    src: ImgActivity3,
    id: "at3",
    name: "Espaço kids",
    descricao:
      "Nullam blandit nisi nec enim faucibus, in consequat nisi varius. Fusce aliquam facilisis feugiat. Etiam volutpat finibus ex.",
  },
  {
    src: ImgActivity4,
    id: "at4",
    name: "Animais",
    descricao:
      "Aliquam erat volutpat. Suspendisse lobortis lacus eu metus viverra vulputate.",
  },
];

const Activities = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossas atividades"
        subtitle="Donec aliquam, metus a lacinia"
      >
        <p className={classes.txt}>
          Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
          malesuada sit amet arcu id pellentesque.
        </p>
        <a href="/" className="btn-verde">
          Saiba mais
        </a>
      </LayoutSections>
      <Slider>
        {activities.map((activity) => (
          <li key={activity.id} className={classes.itemActivity}>
            <img src={activity.src} alt={activity.name} />
            <h3>{activity.name}</h3>
            <p>{activity.descricao}</p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default Activities;
