import React from 'react';
import style from "../styles/Analysis.module.css";
import Questions from './Questions';

export default function Analysis({ answers }) {
  return (
    <div className={style.analysis}>
      <h1>Question Analysis</h1>
      <Questions answers={answers} />
    </div>
  );
}
