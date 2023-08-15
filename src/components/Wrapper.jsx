import { useContext } from "react";
import ButtonDarkMode from "./ButtonDarkMode";
import { DarkModeContext } from "../context";
import Navbar from "./Navbar";
import ChatWelcome from "./ChatWelcome";
import ChatSection from "./ChatSection"
import Footer from "./Footer";

const Wrapper = () => {
  // const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <>
    {/* // <section style={{ -webkit-text-stroke: darkMode ? "2px black" : null }}> */}
      <Navbar />
      <ChatWelcome />
      <ButtonDarkMode />
      <ChatSection />
      <Footer />
      </>
    {/* // </section> */}
  );
};

export default Wrapper;
