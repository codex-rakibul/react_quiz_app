import React from "react";
import style from "../styles/TextInput.module.css";
export default function TextInput({icon,...rest}) {
  return (
    <div className={style.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
