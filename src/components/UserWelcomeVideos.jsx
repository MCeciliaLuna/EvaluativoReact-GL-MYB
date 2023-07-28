const UserWelcomeVideos = ({ videoData }) => {

  const randomVideos = videoData.toSorted(
    () => 0.5 - Math.random()
  )
  const twoVideos = randomVideos.slice(0,2)

  console.log(randomVideos)

  return (
    <section>
      {twoVideos.map((video, index) =>
      <div key={index}>
          <img src={video.image} alt="image-video" />
        </div>)
    }
    </section>
  );
};

export default UserWelcomeVideos;
