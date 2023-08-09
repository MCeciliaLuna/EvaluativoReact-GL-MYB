import { useContext } from "react";
import ButtonDarkMode from "./ButtonDarkMode";
import { DarkModeContext } from "../context";
import Navbar from "./Navbar";
import ChatWelcome from "./ChatWelcome";
import ChatSection from "./ChatSection"
import Footer from "./Footer";

const Wrapper = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <section style={{ backgroundColor: darkMode ? "#d9d9d9" : "#fefcfb" }}>
      <Navbar />
      <ChatWelcome />
      <ButtonDarkMode />
      <ChatSection />
      <Footer />
    </section>
  );
};

export default Wrapper;
