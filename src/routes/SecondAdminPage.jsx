import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectedVideo from "../components/SelectedVideo";
import VideoInteractionSection from "../components/VideoInteractionSection";
import loginStore from "../store/loginStore";
import styles from '../styles/SecondAdminPage.module.css'

const SecondAdminPage = ({ videoData }) => {
  const login = loginStore((state) => state.login);
  const { category } = useParams();
  const navigate = useNavigate()

  const selectedVideo = videoData.find((video) => video.category === category);

  if (!login) {
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <SelectedVideo selectedVideo={selectedVideo} />
      <section className={styles.container}>
  <div className={styles.wave}></div>
</section>
      <VideoInteractionSection />
      <Footer />
    </>
  );
};

export default SecondAdminPage;
