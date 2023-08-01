import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectedVideo from "../components/SelectedVideo";
import VideoInteractionSection from "../components/VideoInteractionSection";


const SecondAdminPage = ({ videoData }) => {

  const { category } = useParams()

  const selectedVideo = videoData.find((video) => video.category === category)

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
