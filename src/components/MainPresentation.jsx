import styles from "../styles/MainPresentation.module.css";
import { Bounce } from "react-awesome-reveal";


const MainPresentation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
      <Bounce cascade damping={0.4} triggerOnce>
      <h1 className={styles.title}>We Learn💡</h1>
        <p className={styles.subtitle}>
          &quot;Pensamos juntos, luego existimos&quot;
        </p>
         <div className={styles.buttonContainer}>
          <a href="#login-form">
            <button className={styles.button}>Ingresá</button>
          </a>
        </div>
          </Bounce>
        </div>
    </section>
  );
};

export default MainPresentation;
