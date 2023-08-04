import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import styles from "../components/navbar.module.css";

const Navbar = () => {
  const setLogin = loginStore((state) => state.setLogin);

  const logout = () => {
    setLogin(false);
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
    return (<Navigate to="/" />);
  };

  const back = () => {
    window.history.back();
  };

  return (
    <div className={styles.navbar}> {/* Aplicamos la clase de estilos para la barra de navegación */}
      <h2>Navbar</h2>
      <div className={styles["navbar-buttons"]}> {/* Aplicamos la clase de estilos para el contenedor de los botones */}
        <button onClick={logout}>Cerrar sesión</button>
        <button onClick={back}>Volver atrás</button>
      </div>
    </div>
  );
};

export default Navbar;
