import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./slider.module.css"; // Importamos los estilos desde el archivo slider.module.css

const Slider = () => {
  const slides = [
    {
      imageUrl: "ruta/de/imagen1.jpg",
      title: "Título de la Imagen 1",
      description: "Descripción breve de la Imagen 1",
    },
    {
      imageUrl: "ruta/de/imagen2.jpg",
      title: "Título de la Imagen 2",
      description: "Descripción breve de la Imagen 2",
    },
    // imágenes y descripciones aquí...
  ];

  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} className={styles["carousel-root"]}>
      {slides.map((slide, index) => (
        <div key={index} className={styles["carousel-slide"]}>
          <img src={slide.imageUrl} alt={`Imagen ${index + 1}`} />
          <div className={styles.legend}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
