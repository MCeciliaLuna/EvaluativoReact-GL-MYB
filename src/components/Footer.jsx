import React from "react";
import styles from "./footer.module.css"; // Importamos los estilos desde el archivo footer.module.css

const Footer = () => {
  return (
    <div className={styles.footer}> {/* Aplicamos la clase de estilos para el footer */}
      <h3>Grupo 5 - Ceci - Andrea - Eze</h3>
    </div>
  );
};

export default Footer;

