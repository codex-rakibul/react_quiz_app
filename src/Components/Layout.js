import React from "react";
import Nav from "./Nav_Components/Nav";
import style from "../styles/Layout.module.css";
export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={style.main}></main>
      <div className={style.container}>
        {children}
      </div>
    </>
  );
}
