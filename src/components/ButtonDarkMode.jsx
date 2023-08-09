import { useContext } from "react";
import { DarkModeContext } from "../context";
import style from '../styles/ButtonDarkMode.module.css'

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <section className={style.section}>
      <p style={{ color: darkMode ? "#0a1128" : "#fefcfb" }} className="pe-3">
        Modo normal
      </p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
      <p style={{ color: darkMode ? "#fefcfb" : "#0a1128" }} className="ps-3">Descansar vista</p>
    </section>
  );
};

export default ButtonDarkMode;
