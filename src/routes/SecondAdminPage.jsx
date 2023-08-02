import { useParams, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectedVideo from "../components/SelectedVideo";
import VideoInteractionSection from "../components/VideoInteractionSection";
import loginStore from "../store/loginStore";

const SecondAdminPage = ({ videoData }) => {
  const login = loginStore((state) => state.login);
  const { category } = useParams();

  const selectedVideo = videoData.find((video) => video.category === category);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <SelectedVideo selectedVideo={selectedVideo} />
      <VideoInteractionSection />
      <Footer />
    </>
  );
};

export default SecondAdminPage;
