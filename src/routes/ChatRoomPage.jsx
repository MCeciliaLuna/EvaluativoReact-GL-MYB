import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChatWelcome from "../components/ChatWelcome";
import ChatSection from "../components/ChatSection";
import Footer from "../components/Footer";
import ButtonDarkMode from "../components/ButtonDarkMode";

const ChatRoomPage = () => {
  const login = loginStore((state) => state.login);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <ButtonDarkMode />
      <Navbar />
      <ChatWelcome />
      <ChatSection />
      <Footer />
    </>
  );
};

export default ChatRoomPage;
