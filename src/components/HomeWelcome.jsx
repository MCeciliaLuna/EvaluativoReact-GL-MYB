import styles from "../styles/HomeWelcome.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../context";
import { Fade } from "react-awesome-reveal";

const UserWelcome = () => {
  const userName = sessionStorage.getItem("userName");
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <section className={styles.section}>
      <div className={styles.containerText}>
      <Fade cascade damping={0.4} triggerOnce>
        <h1 className={styles.welcomeText} name="main-image-video" style={{ fontWeight: darkMode ? "bold" : null ,WebkitTextStroke: darkMode ? "0.8px black" : null }}>
          ¡Bienvenid@ <b className={styles.username}>{userName}</b> a nuestra
          comunidad!
        </h1>
        <h4 className={styles.welcomeSecondText}>
          Queremos saber lo que pensás de algunos temas de actualidad
        </h4>
        <h4 className={styles.welcomeSecondText}>¡Comencemos! 🚀</h4>
        </Fade>
      </div>
    </section>
  );
};

export default UserWelcome;
