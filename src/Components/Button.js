import React from "react";
import style from ".././styles/Button.module.css";
export default function Button({classname, children}) {
  return (
    <div className={`${style.button} ${classname}`}>
      {children}
    </div>
  );
}
