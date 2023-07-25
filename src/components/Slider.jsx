import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  const slides = [
    {
      imageUrl: 'ruta/de/imagen1.jpg',
      title: 'Título de la Imagen 1',
      description: 'Descripción breve de la Imagen 1',
    },
    {
      imageUrl: 'ruta/de/imagen2.jpg',
      title: 'Título de la Imagen 2',
      description: 'Descripción breve de la Imagen 2',
    },
    // Añadir más objetos de imágenes y descripciones aquí...
  ];

  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.imageUrl} alt={`Imagen ${index + 1}`} />
          <div className="legend">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
