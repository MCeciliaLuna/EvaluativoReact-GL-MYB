import loginStore from "../store/loginStore";
import Navbar from "../components/Navbar";
import ChatWelcome from "../components/ChatWelcome";
import { Navigate } from "react-router-dom";
import ChatSection from "../components/ChatSection";
const ChatRoomPage = () => {
  const login = loginStore((state) => state.login);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <ChatWelcome />
      <ChatSection />
    </>
  );
};

export default ChatRoomPage;
