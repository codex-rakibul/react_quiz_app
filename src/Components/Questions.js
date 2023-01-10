import React from "react";
import Answers from "./Answers";
import style from ".././styles/Question.module.css";
export default function Questions({answers = []}) {
  return answers.map((answer, index) => (
    <div className={style.question} key={index}>
      <div className={style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
