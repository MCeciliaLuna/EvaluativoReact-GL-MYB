import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TitleWelcome from "../components/TitleWelcome";
import styles from "../components/login.module.css";

const Login = () => {
  return (
    <div className={styles.pageContainer}> {/* Aplica la clase del CSS module al contenedor principal */}
      <Navbar />
      <TitleWelcome />
      <LoginForm />
      <Slider />
      <Footer />
    </div>
  );
};

export default Login;
