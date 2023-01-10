import React from "react";
import style from "../styles/ProgressBar.module.css";
import Button from "./Button";
//import { Link } from "react-router-dom";
export default function ProgressBar({ next, prev,submit, progress }) {
  return (
    <div className={style.progressBar}>
      <div className={style.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className={style.tooltip}>{progress}% Cimplete!</div>
        <div className={style.rangeBody}>
          <div
            className={style.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button className={style.next} onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? 'Submit Quiz':'Next Question'}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
