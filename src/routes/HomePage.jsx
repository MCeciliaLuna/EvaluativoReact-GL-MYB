import HomeWelcome from "../components/HomeWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeVideos from "../components/HomeVideos";
import HomeCategories from "../components/HomeCategories";
import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

const HomePage = ({ videoData }) => {
  const login = loginStore((state) => state.login);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <HomeWelcome />
      <HomeVideos videoData={videoData} />
      <section className={styles.container}>
        <div className={styles.wave}></div>
      </section>
      <HomeCategories videoData={videoData} />
      <Footer />
    </>
  );
};

export default HomePage;
