import styles from "../styles/MainPresentation.module.css";

const MainPresentation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h1 className={styles.title}>We Learn💡</h1>
        <p className={styles.subtitle}>
          &quot;Pensamos juntos, luego existimos&quot;
        </p>
        <div className={styles.buttonContainer}>
          <a href="#login-form">
            <button className={styles.button}>Ingresá</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPresentation;
