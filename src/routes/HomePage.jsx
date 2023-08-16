import HomeWelcome from "../components/HomeWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeVideos from "../components/HomeVideos";
import HomeCategories from "../components/HomeCategories";
import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import ButtonDarkMode from "../components/ButtonDarkMode";

const HomePage = ({ videoData }) => {
  const login = loginStore((state) => state.login);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <ButtonDarkMode />
      <Navbar />
      <HomeWelcome />
      <HomeVideos videoData={videoData} />
      <HomeCategories videoData={videoData} />
      <Footer />
    </>
  );
};

export default HomePage;
