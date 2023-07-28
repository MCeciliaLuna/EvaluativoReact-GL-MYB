const UserTopicCategories = ({ videoData }) => {
  return (
    <section>
      {videoData.map((video, index) => (
        <div key={index}>
          <p>{video.category}</p>
        </div>
      ))}
    </section>
  );
};

export default UserTopicCategories;
