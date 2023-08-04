import styles from "../components/login.module.css";

const TitleWelcome = () => {
  return (
    <div className={styles.titlewellcome}>
      <h1>Bienvenido a WeLearn</h1>
      <p>
      "Pensamos juntos, luego existimos"
      </p>
    </div>
  );
};

export default TitleWelcome;
