import React, { Fragment } from "react";
import CheckBox from "./CheckBox";
import style from "../styles/Answers.module.css";

export default function Answers({ handleChange, options = [], input }) {
  return (
    <div className={style.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              key={index}
              className={style.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <CheckBox
              key={index}
              className={`${style.answer} ${
                option.correct
                  ? style.correct
                  : option.checked
                  ? style.wrong
                  : null
              } `}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
