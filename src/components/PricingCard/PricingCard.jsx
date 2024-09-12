import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './PricingCard.css';

function PricingCard({ cardData }) {  
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <Container className="mt-5">
      <Row>
        {cardData.map((card, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="mb-4">
            <Card
              onClick={() => handleCardClick(index)}
              style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <Card.Body className="d-flex flex-column p-0">
                <Card.Title
                  className="text-center p-3"
                  style={{
                    backgroundColor: index === activeCardIndex ? '#3FBBC0' : '#f8f9fa',
                    color: index === activeCardIndex ? 'white' : '#000',
                  }}
                >
                  {card.title}
                </Card.Title>
                <h4 className="my-3 text-center price fs-1">
                  <sup className='fs-4'>$</sup> {card.price} <span className="price-month fs-5"> / month</span>
                </h4>
                <ul className="list-unstyled d-flex flex-column align-items-center">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`my-1 ${index === 0 && i >= 3 ? 'strikethrough' : ''} ${index === 1 && i === 4 ? 'strikethrough' : ''}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="py-3 text-center" style={{ backgroundColor: '#f8f9fa' }}>
                  <button type="button" className="border-0 rounded py-2 bg-color text-light px-4">Buy Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PricingCard;
