import React from "react";
import Account from "./Account";
import style from "../.././styles/Nav.module.css";
import logo from "../.././assets/images/logo2.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../.././Contexts/AuthContext";
export default function Nav() {
  const { currentUser } = useAuth();
  return (
    <nav className={style.nav}>
      {currentUser ? (
        <ul>
          <li>
            <Link to="/" className={style.brand}>
              <img
                title={currentUser.displayName}
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "100%",
                  border: "2px solid #002333",
                  outline: "none",
                }}
              />
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/" className={style.brand}>
              <img
                src={logo}
                alt="Learn with Sumit Logo"
                style={{ height: "4rem", width: "4rem", borderRadius: "100%" }}
              />
              <h3>Quiz app</h3>
            </Link>
          </li>
        </ul>
      )}
      <Account />
    </nav>
  );
}
