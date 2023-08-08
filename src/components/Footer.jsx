import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.data}>
        <small>
          &copy; 2023 <b>WeLearn</b> - Todos los Derechos Reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
