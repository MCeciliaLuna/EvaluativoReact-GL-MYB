import loginStore from "../store/loginStore";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import chatIcon from "../assets/images/chatIcon";
import backIcon from "../assets/images/backIcon";
import outSesionIcon from "../assets/images/outSesionIcon";
import Swal from "sweetalert2";
import { useContext } from "react";
import { DarkModeContext } from "../context";

const Navbar = () => {
  const setLogin = loginStore((state) => state.setLogin);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const logout = () => {
    Swal.fire({
      text: "¿Estás segur@ que querés cerrar sesión?",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonColor: "var(--background)",
      cancelButtonColor: "var(--background-cards)",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        setLogin(false);
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("userEmail");
        navigate("/");
      }
    });
  };

  const back = () => {
    window.history.back();
  };

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundColor: darkMode ? "#034078" : null }}
    >
      <NavLink className={styles.logo} to="/home">
        WeLearn💡
      </NavLink>
      <div className={styles.linksContainer}>
        <NavLink className={styles.navLink} onClick={back}>
          {backIcon}
        </NavLink>
        <NavLink className={styles.navLink} to="/chatroom">
          {chatIcon}
        </NavLink>
        <NavLink className={styles.navLink} onClick={logout}>
          {outSesionIcon}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
