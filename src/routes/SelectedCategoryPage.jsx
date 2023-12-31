import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoSelected from "../components/VideoSelected";
import VideoComments from "../components/VideoComments";
import loginStore from "../store/loginStore";
import ButtonDarkMode from "../components/ButtonDarkMode";

const SelectedCategoryPage = ({ videoData }) => {
  const login = loginStore((state) => state.login);
  const { category } = useParams();
  const navigate = useNavigate();

  const videoSelected = videoData.find((video) => video.category === category);

  if (!login) {
    navigate("/");
  }

  return (
    <>
      <ButtonDarkMode />
      <Navbar />
      <VideoSelected videoSelected={videoSelected} />
      <VideoComments />
      <Footer />
    </>
  );
};

export default SelectedCategoryPage;
