import UserWelcome from "../components/UserWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserWelcomeVideos from "../components/UserWelcomeVideos";
import UserTopicCategories from "../components/UserTopicCategories";
import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import styles from '../styles/AdminPage.module.css'

const AdminPage = ({ videoData }) => {
  const login = loginStore((state) => state.login);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <UserWelcome />
      <UserWelcomeVideos videoData={videoData} />
      <section className={styles.containertwo}>
  <div className={styles.wavetwo}></div>
</section>
      <UserTopicCategories videoData={videoData} />
      <Footer />
    </>
  );
};

export default AdminPage;
