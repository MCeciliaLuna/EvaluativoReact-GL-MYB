import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectedVideo from "../components/SelectedVideo";
import VideoInteractionSection from "../components/VideoInteractionSection";
import loginState from "../context/loginStore";


const SecondAdminPage = () => {
  const login = loginState((state) => state.login);

  if (!login) {
    return (<Navigate to="/" />)
  }

  return (
    <>
    <Navbar />
      <SelectedVideo />
      <VideoInteractionSection />
      <Footer />
    </>
  );
};

export default SecondAdminPage;
