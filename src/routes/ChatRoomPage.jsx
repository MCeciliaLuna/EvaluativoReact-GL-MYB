import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChatWelcome from "../components/ChatWelcome";
import ChatSection from "../components/ChatSection"
import Footer from "../components/Footer";
import ButtonDarkMode from "../components/ButtonDarkMode";
import { useContext } from "react";
import { DarkModeContext } from "../context/index";

const ChatRoomPage = () => {
  const login = loginStore((state) => state.login);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
           <section style={{ backgroundColor: darkMode ? "#d9d9d9" : "#fefcfb" }}>
            <ButtonDarkMode />
      <Navbar />
      <ChatWelcome />
      <ChatSection />
      <Footer />
      </section>
      );
};

export default ChatRoomPage;
