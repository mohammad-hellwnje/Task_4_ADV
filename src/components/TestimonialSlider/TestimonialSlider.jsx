import React, { useState } from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; 
import './TestimonialSlider.css'; 

const TestimonialSlider = ({ testimonials }) => { 
  const [activeIndex, setActiveIndex] = useState(0);

  const groupedCards = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedCards.push(testimonials.slice(i, i + 3));
  }

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container className='p-0 mb-5'>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} indicators={false} interval={2000}>
        {groupedCards.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((card, idx) => (
                <Col key={idx} xs={12} md={4} className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Card.Text className='p-3 bg-light m-0 box-height fst-italic text-black-50'>
                      <FaQuoteLeft className="main-color me-2" /> 
                      {card.text}
                      <FaQuoteRight className="main-color ms-2" /> 
                    </Card.Text>
                    <Card.Body>
                      <Card.Img variant="left" src={card.image} className='rounded-circle h-25 image-box mb-3' />
                      <Card.Title>{card.title}</Card.Title>
                      <span className="text-muted">{card.smallText}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="custom-indicators mt-3">
        {groupedCards.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialSlider;
