import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Slider.module.css";
import { videos } from "../api/videosArray";

const Slider = () => {
  const lastThreeVideos = videos.slice(Math.max(videos.length - 3, 0));

  return (
    <section className={styles.section}>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} className={styles.carousel}>
        {lastThreeVideos.map((video, index) => (
          <div key={index}>
            <img src={video.image} alt="portada-video" />
            <article className={styles.textvideos}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <p><i>{video.category}</i></p>
            </article>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
