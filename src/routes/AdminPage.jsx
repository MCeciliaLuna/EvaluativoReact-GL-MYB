import UserWelcome from "../components/UserWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserWelcomeVideos from "../components/UserWelcomeVideos";
import UserTopicCategories from "../components/UserTopicCategories";
import { videos } from "../api/videosArray";
import loginState from "../context/loginStore";
import { Navigate } from "react-router-dom";


const AdminPage = () => {
  const login = loginState((state) => state.login);


  if (!login) {
    return (<Navigate to="/" />)
  }

  // const logout = () => {
  //   setLogin(false) 
  //   return (<Navigate to="/" />);
  // }

  return (
    <>
    <Navbar />
      <UserWelcome />
      <UserWelcomeVideos videoData={videos} />
      <UserTopicCategories videoData={videos} />
      <Footer />
    </>
  );
};

export default AdminPage;
