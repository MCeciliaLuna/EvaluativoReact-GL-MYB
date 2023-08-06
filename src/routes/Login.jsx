import Footer from "../components/Footer";
import DescriptionWelcome from "../components/DescriptionWelcome";
import LoginForm from "../components/LoginForm";
import Slider from "../components/Slider";
import TitleWelcome from "../components/TitleWelcome";
import styles from '../styles/LoginPage.module.css'

const Login = () => {
  return (
    <>
      <TitleWelcome />
      <DescriptionWelcome />
      <section className={styles.container}>
  <div className={styles.wave}></div>
</section>
      <Slider />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
