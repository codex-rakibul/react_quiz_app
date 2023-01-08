import swal from "sweetalert";
import React from "react";
import style from "../.././styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../.././Contexts/AuthContext";
//http://drive.google.com/uc?export=view&id=1xLa6K6xZxuocybe0uxO3N3NULkMy1R2Z
export default function Account() {
  const { currentUser, logout } = useAuth();
  //const [imageLoad, setImageLoad] = useState(false);

  return (
    <div className={style.account}>
      {currentUser ? (
        <>
          <span
            className="material-icons-outlined"
            title="Logout"
            style={{ color: "red" }}
            onClick={() => {
              swal("Safely log out");
              logout();
            }}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link
            to="/signup"
            style={{
              marginRight: "1rem",
              height: "2.5rem",
              padding: ".6rem",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#002333",
              color: "white",
              borderRadius: ".5rem",
            }}
          >
            Signup
          </Link>
          <Link
            to="/login"
            style={{
              marginRight: "1rem",
              height: "2.5rem",
              padding: ".6rem",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#002333",
              color: "white",
              borderRadius: ".5rem",
            }}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
