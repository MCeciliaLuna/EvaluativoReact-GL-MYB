import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ChatRoomPage from "../components/chatPage/ChatRoomPage";
import loginStore from '../store/loginStore'

const ChatRoom = () => {
  const login = loginStore((state) => state.login);
  const navigate = useNavigate()

  if (!login) {
    navigate("/");
  }
   return (
    <>
      <Navbar />
        <ChatRoomPage></ChatRoomPage>
      <Footer />
    </>
  );
};
export default ChatRoom;
