import React from "react";
import Answers from "../Components/Answers";
import style from ".././styles/Question.module.css";
export default function Question() {
  return (
    <div className={style.question}>
      <div className={style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers/>
    </div>
  );
}
