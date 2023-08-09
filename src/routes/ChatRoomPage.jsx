import loginStore from "../store/loginStore";
import { Navigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { DarkModeProvider } from "../context/index";
const ChatRoomPage = () => {
  const login = loginStore((state) => state.login);

  if (!login) {
    return <Navigate to="/" />;
  }

  return (
     <DarkModeProvider>
      <Wrapper />
    </DarkModeProvider>
  );
};

export default ChatRoomPage;
