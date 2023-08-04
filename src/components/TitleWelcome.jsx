import React from "react";
import styles from "../components/login.module.css";

const TitleWelcome = () => {
  return (
    <div className={styles.fondo}>
      <h1>Bienvenido a Atenea</h1>
      <p>
        Aquí encontrarás charlas sobre temáticas de tu interés.
      </p>
    </div>
  );
};

export default TitleWelcome;
