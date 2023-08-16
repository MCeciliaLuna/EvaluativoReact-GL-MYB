import Footer from "../components/Footer";
import MainDescriptionCards from "../components/MainDescriptionCards";
import Login from "../components/Login";
import MainSlider from "../components/MainSlider";
import MainPresentation from "../components/MainPresentation";

const MainPage = () => {
  return (
    <>
          <MainPresentation />
      <MainDescriptionCards />
            <MainSlider />
      <Login />
      <Footer />
    </>
  );
};

export default MainPage;
