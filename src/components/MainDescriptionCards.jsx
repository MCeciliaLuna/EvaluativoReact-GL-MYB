import styles from "../styles/MainDescriptionCards.module.css";
import { Zoom } from "react-awesome-reveal";

const MainDescriptionCards = () => {
  return (
    <>
    <section className={styles.section}>
      <div className={styles.card}>
      <Zoom cascade damping={0.1} triggerOnce>
        <p className={styles.emoji}>🌎</p>
        <h3>
          ¡Accedé a análisis sobre temas que nos interpelan actualmente y
          compartí tus opiniones, conocimientos y preguntas con nuestra
          comunidad!
        </h3>
      </Zoom>
      </div>
      <br />
      <div className={styles.card}>
      <Zoom cascade damping={0.2} triggerOnce>
        <p className={styles.emoji}>🫱🏼‍🫲🏽</p>
        <p className={styles.argument}>
          En un mundo de polarizaciones de ideas y prejuicios, promovemos el
          acercamiento de opiniones, dudas e ideas con base en el respeto y la
          comprensión
        </p>
        </Zoom>
      </div>
      <br />
      <div className={styles.card}>
      <Zoom cascade damping={0.3} triggerOnce>
        <p className={styles.emoji}>🚀</p>
        <h3>
          Es muy fácil acceder: con un nombre de usuario y un mail de contacto
          ya sos parte de nuestra comunidad <br />
          ¿Qué estás esperando?
        </h3>
        </Zoom>
      </div>
    </section>
    </>
  );
};

export default MainDescriptionCards;
