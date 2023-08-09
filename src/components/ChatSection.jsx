import io from "socket.io-client";
import { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import styles from "../styles/ChatSection.module.css";

const ChatSection = () => {
  const storedUsername = sessionStorage.getItem("userName");
  const socket = io("https://chat-socket-r9w3.onrender.com", {
    query: {
      username: storedUsername,
    },
  });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerChat}>
          <ul className={styles.ul}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.from === "Me" ? styles.color1 : styles.color2
                }`}
              >
                <li
                  className={`${
                    message.from === "Me" ? styles.chat1 : styles.chat2
                  }`}
                >
                  <p
                    className={`${
                      message.from === "Me" ? styles.user1 : styles.user2
                    }`}
                  >
                    {message.from}
                  </p>
                  <p className={styles.userMessage}>{message.body}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className={styles.button}>
            <MdSend className={styles.buttonIcon} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatSection;
