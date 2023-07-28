import UserWelcome from "../components/UserWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserWelcomeVideos from "../components/UserWelcomeVideos";
import UserTopicCategories from "../components/UserTopicCategories";
import { videos } from "../api/videosArray";


const AdminPage = () => {

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
