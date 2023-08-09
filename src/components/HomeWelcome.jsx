import styles from "../styles/HomeWelcome.module.css";

const UserWelcome = () => {
  const userName = sessionStorage.getItem("userName");
  return (
    <section className={styles.section}>
      <div className={styles.containerText}>
        <h1 className={styles.welcomeText}>
          ¡Bienvenid@ <b className={styles.username}>{userName}</b> a nuestra
          comunidad!
        </h1>
        <h4 className={styles.welcomeSecondText}>
          Queremos saber lo que pensás de algunos temas de actualidad
        </h4>
        <h4 className={styles.welcomeSecondText}>¡Comencemos! 🚀</h4>
      </div>
    </section>
  );
};

export default UserWelcome;
