import { Link } from "react-router-dom";

const UserTopicCategories = ({ videoData }) => {
  return (
    <section>
      {videoData.map((video, index) => (
        <div key={index}>
          <Link to={`/secondadminpage/${video.category}`}>
            <p>{video.category}</p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default UserTopicCategories;
