import Footer from "../components/Footer";
import MainDescriptionCards from "../components/MainDescriptionCards";
import Login from "../components/Login";
import MainSlider from "../components/MainSlider";
import MainPresentation from "../components/MainPresentation";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  return (
    <>
          <MainPresentation />
      <MainDescriptionCards />
      <section className={styles.container}>
        <div className={styles.wave}></div>
      </section>
      <MainSlider />
      <Login />
      <Footer />
    </>
  );
};

export default MainPage;
