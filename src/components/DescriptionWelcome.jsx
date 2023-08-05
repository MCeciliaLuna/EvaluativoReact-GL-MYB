import styles from '../styles/DescriptionWelcome.module.css'

const DescriptionWelcome = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
      <h3>
      ¡Accedé a análisis sobre temas que nos interpelan actualmente y compartí tus opiniones, conocimientos y preguntas con nuestra comunidad!
      </h3>
      </div>
      <br />
      <div className={styles.card}>
      <p className={styles.argument}>
      En un mundo de polarizaciones de ideas y prejuicios, promovemos el acercamiento de opiniones, dudas e ideas con base en el respeto y la comprensión
      </p>
      </div>
      <br />
      <div className={styles.card}>
      <h3>
      Es muy fácil acceder: con un nombre de usuario y un mail de contacto ya sos parte de nuestra comunidad <br />¿Qué estás esperando?
      </h3>
      </div>
    </section>
  );
};

export default DescriptionWelcome;