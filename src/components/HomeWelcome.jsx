import styles from "../styles/HomeWelcome.module.css";
import { Bounce } from "react-awesome-reveal";

const UserWelcome = () => {
  const userName = sessionStorage.getItem("userName");
  
    return (
    <section className={styles.section}>
      <div className={styles.containerText}>
      <Bounce cascade damping={0.4} triggerOnce>
        <h1 className={styles.welcomeText} name="main-image-video">
          ¡Bienvenid@ <b className={styles.username}>{userName}</b> a nuestra
          comunidad!
        </h1>
        <h4 className={styles.welcomeSecondText}>
          Queremos saber lo que pensás de algunos temas de actualidad
        </h4>
        <h4 className={styles.welcomeSecondText}>¡Comencemos! 🚀</h4>
        </Bounce>
      </div>
    </section>
  );
};

export default UserWelcome;