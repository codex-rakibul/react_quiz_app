import React from "react";
import style from "../styles/Illustration.module.css";
import signupImage from ".././assets/images/login.svg";
export default function Illustration() {
  return (
    <div className={style.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}
