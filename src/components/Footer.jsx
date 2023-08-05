import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.grupo1}>
        <div className={styles.box}>
          <figure>
            <a href="#">
              <img
                src=""
                alt=""
              />
            </a>
          </figure>
        </div>
        <div className={styles.box}>
          <h2>SOBRE NOSOTROS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
        </div>
        <div className={styles.box}>
          <h2>SIGUENOS</h2>
          <div className={styles.redSocial}>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-youtube"></a>
          </div>
        </div>
      </div> */}
      <div className={styles.data}>
        <small>&copy; 2023 <b>WeLearn</b> - Todos los Derechos Reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
