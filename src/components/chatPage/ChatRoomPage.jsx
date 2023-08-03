import styles from "./ChatRoomPage.module.css";
import io from "socket.io-client";
import { useState,useEffect } from "react";

const storedUsername = sessionStorage.getItem("userName");
const socket = io("http://localhost:3000",{
  query: {
    username: storedUsername,
  },
});
const ChatRoomPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    const newMessage ={
      body:message,
      from:"Me"
    }
    setMessages([newMessage, ...messages])
    setMessage('');
  };
  
  useEffect(() => {  
    const receiveMessage = (message) => {
    setMessages([message,...messages]);
  };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);





  return (
    <div className={styles.fondo}>
      chatRoom
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
      {messages.map((message, index) => (
        <div key={index}>
          <p>
            {message.from}:{message.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatRoomPage;
