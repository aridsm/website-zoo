import React, { useState } from "react";
import classes from "./Faq.module.css";
import LayoutSections from "./layout/LayoutSections";
import ImgGorila from "../assets/gorilla.png";

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
  const [answerToShown, setAnswerToShown] = useState(questions[0].id);

  const showAnswerHandler = (id) => {
    setAnswerToShown(id);
  };

  return (
    <section className={classes.section}>
      <LayoutSections subtitle="Perguntas frequentes" title="FAQ">
        <ul className={classes.questionList}>
          {questions.map((q) => (
            <li key={q.id}>
              <button
                onClick={() => showAnswerHandler(q.id)}
                className={answerToShown === q.id ? classes.visible : ""}
              >
                {q.question}
              </button>
              <p
                className={`${classes.answer} ${
                  answerToShown === q.id ? classes.visible : ""
                }`}
              >
                {q.answer}
              </p>
            </li>
          ))}
        </ul>
        <a href="/" className="btn-verde">
          Todos as perguntas
        </a>
      </LayoutSections>
      <div className={classes.imgContainer}>
        <img src={ImgGorila} alt="gorila" />
      </div>
    </section>
  );
};

export default Faq;
