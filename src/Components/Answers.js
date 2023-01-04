import React from 'react'
import CheckBox from './CheckBox';
import style from "../styles/Answers.module.css";

export default function Answers() {
  return (
    <div className={style.answers}>
      <CheckBox className={style.answer} text="Test Answer"/>
    </div>
  );
}
