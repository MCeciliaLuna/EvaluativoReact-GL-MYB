import { Link, useRouteError } from "react-router-dom";
import styles from "./styles/ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={styles.page}>
      <section>
        <h1 className={styles.title}>¡Ups!</h1>
        <p className={styles.subtitle}>No hemos encontrado lo que buscabas.</p>
        <Link to="/">
          <button className={styles.button}>Volver al inicio</button>
        </Link>
      </section>
    </div>
  );
}
