import loginStore from "../store/loginStore";
// import { Link, useNavigate  } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  // const setLogin = loginStore((state) => state.setLogin);
  // const navigate = useNavigate()

  // const logout = () => {
  //   setLogin(false);
  //   sessionStorage.removeItem('userName');
  //   sessionStorage.removeItem('userEmail');
  //   navigate("/");
  // };

  // const back = () => {
  //   window.history.back();
  // };

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-buttons"]}>
        {/* <button onClick={logout}>Cerrar sesión</button>
        <button onClick={back}>Volver atrás</button>
        <Link to="/chatroom">
        <button>Chat</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar; 
