import React, { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './GallerySlider.css';

function GallerySlider({ images }) { 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  const getVisibleImages = () => {
    let visibleImages = [];
    for (let i = 0; i < 5; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  return (
    <Container className='mb-5'>
      <Carousel
        indicators={false}
        controls={false}
        interval={null}
        slide={false}
        className="gallery-slider"
      >
        <Carousel.Item>
          <div className="gallery-slider-wrapper">
            {getVisibleImages().map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`gallery-slider-img ${index === 2 ? 'active' : ''}`}
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="custom-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
}

export default GallerySlider;

