import UserWelcome from "../components/UserWelcome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserWelcomeVideos from "../components/UserWelcomeVideos";
import UserTopicCategories from "../components/UserTopicCategories";
import { videos } from "../api/videosArray";


const AdminPage = () => {
  
  const linksVideos = videos.map(video => video.urlVideo);
  
  const videosArray = videos.map(video => video);

  return (
    <>
    <Navbar />
      <UserWelcome />
      <UserWelcomeVideos linksVideos={linksVideos} />
      <UserTopicCategories videos={videosArray} />
      <Footer />
    </>
  );
};

export default AdminPage;
