import React from "react";
import style from ".././styles/Button.module.css";
export default function Button({classname, children, ...rest}) {
  return (
    <button className={`${style.button} ${classname}`} {...rest} >
      {children}
    </button>
  );
}
