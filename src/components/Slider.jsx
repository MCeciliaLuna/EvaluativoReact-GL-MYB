import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./slider.module.css";
import { videos } from "../api/videosArray";

const Slider = () => {
  const lastThreeVideos = videos.slice(Math.max(videos.length - 3, 0));

  return (
    <div className={styles["carousel-container"]}>
      <h2>Últimas charlas</h2>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} className={styles["carousel-root"]}>
        {lastThreeVideos.map((video, index) => (
          <div key={index} className={styles["carousel-slide"]}>
            <img src={video.image} alt={`Imagen ${index + 1}`} />
            <div className={styles.legend}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              {/*<span>{video.category}</span>*/}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
