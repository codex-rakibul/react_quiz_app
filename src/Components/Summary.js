import React from "react";
import style from ".././styles/Summary.module.css";
import image from ".././assets/images/success.png";
export default function Summary() {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={style.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
