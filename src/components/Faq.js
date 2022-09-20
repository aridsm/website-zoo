import React from "react";
import classes from "./Faq.module.css";
import LayoutSections from "./layout/LayoutSections";
import ImgFaq from "../assets/img-faq.jpg";

const questions = [
  {
    question: "Maecenas pretium ipsum eu sem molestie?",
    answer:
      "Duis neque tellus, vestibulum at placerat porta, tincidunt in ipsum. Sed eget eros arcu.",
    id: "p1",
  },
  {
    question: "Sed aliquet volutpat nulla id?",
    answer: "Mauris semper dapibus turpis, eget tempus purus rhoncus vel.",
    id: "p2",
  },
  {
    question: "Donec feugiat felis justo, eu maximus eros lacinia nec?",
    answer:
      "Cras ut felis scelerisque, rutrum tellus sit amet, bibendum sapien. In vestibulum pretium enim vitae aliquet.",
    id: "p3",
  },
  {
    question: "Quisque ut sapien a elit efficitur lacinia?",
    answer:
      "Praesent sed nisl sodales, commodo tellus nec, gravida odio. Etiam ornare id leo nec fringilla.",
    id: "p4",
  },
  {
    question: "Nunc ullamcorper posuere velit?",
    answer: "Morbi sed enim in velit dictum fringilla.",
    id: "p5",
  },
];

const Faq = () => {
  const questionsContent = (
    <ul className={classes.questionList}>
      {questions.map((q) => (
        <li key={q.id}>
          <button>{q.question}</button>
          <p className={classes.answer}>{q.answer}</p>
        </li>
      ))}
    </ul>
  );
  return (
    <LayoutSections
      className={classes.container}
      title="FAQ"
      content={questionsContent}
      subtitle="Perguntas frequentes"
    >
      <div className={classes.imgContainer}>
        <img src={ImgFaq} alt="gorila" />
      </div>
    </LayoutSections>
  );
};

export default Faq;
