import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/MainSlider.module.css";
import { videos } from "../api/videosArray";

const MainSlider = () => {
  const lastThreeVideos = videos.slice(Math.max(videos.length - 3, 0));
  const firstThreeVideos = videos.slice(0, 3);

  return (
    <section className={styles.section}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        className={styles.carousel}
      >
        {lastThreeVideos.map((video, index) => (
          <div key={index} className={styles.card}>
            <img src={video.image} alt="portada-video" />

            <article className={styles.textvideos}>
              <h3>{video.title}</h3>
              <p className={styles.p}>{video.description}</p>
              <p>
                <i>{video.category}</i>
              </p>
            </article>
          </div>
        ))}
      </Carousel>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        className={styles.secondcarousel}
      >
        {firstThreeVideos.map((video, index) => (
          <div key={index} className={styles.secondcard}>
            <img src={video.image} alt="portada-video" />
            <article className={styles.secondtextvideos}>
              <h3>{video.title}</h3>
              <p className={styles.secondp}>{video.description}</p>
              <p>
                <i>{video.category}</i>
              </p>
            </article>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MainSlider;
