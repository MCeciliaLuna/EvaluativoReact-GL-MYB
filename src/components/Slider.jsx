import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./slider.module.css"; // Importamos los estilos desde el archivo slider.module.css
import { videos } from "../api/videosArray"; // Importamos el array de videos desde el archivo videosArray.jsx

const Slider = () => {
  // Obtener los últimos 3 videos del array
  const lastThreeVideos = videos.slice(Math.max(videos.length - 3, 0));

  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} className={styles["carousel-root"]}>
      {lastThreeVideos.map((video, index) => (
        <div key={index} className={styles["carousel-slide"]}>
          <img src={video.image} alt={`Imagen ${index + 1}`} />
          <div className={styles.legend}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <span>{video.category}</span>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
