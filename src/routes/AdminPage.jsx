import UserWelcome from "../components/UserWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserWelcomeVideos from "../components/UserWelcomeVideos";
import UserTopicCategories from "../components/UserTopicCategories";


const AdminPage = ({videoData}) => {

  return (
    <>
    <Navbar />
      <UserWelcome />
      <UserWelcomeVideos videoData={videoData} />
      <UserTopicCategories videoData={videoData} />
      <Footer />
    </>
  );
};

export default AdminPage;
