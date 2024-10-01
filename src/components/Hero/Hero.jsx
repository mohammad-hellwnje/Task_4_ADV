import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

function Hero({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={5000}>
          <img
            className="d-block w-100 hero-image"
            src={image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="d-flex justify-content-center align-items-center hero-caption ">
            <div className="carousel-box text-center text-dark">
              <h2 >Temporibus autem quibusdam</h2>
              <p >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quidem explicabo itaque rerum, enim eos exercitationem ut vitae iusto pariatur doloremque necessitatibus veritatis ad, accusantium id quisquam minus sint corporis. Natus aperiam eius provident impedit?
              </p>
              <button type="button" class="border-0 rounded py-2 bg-color text-light px-5">Read More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;


