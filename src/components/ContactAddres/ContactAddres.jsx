import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import './ContactAddres.css';

function ContactAddres() {

  const cardsData = [
    {
      icon: <FaHome />,
      title: 'Our Address',
      linkText: 'View on Map',
      link: '#'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      linkText: 'Call Us Now',
      link: 'tel:+123456789'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      linkText: 'Send Email',
      link: 'mailto:info@example.com'
    }
  ];

  return (
    <Container>
      <Row >
        <Col lg={6} className="w-100 mb-4">
          <Card className="text-center p-2 custom-card">
            <div className="icon-container">
              {cardsData[0].icon}
            </div>
            <Card.Title>{cardsData[0].title}</Card.Title>
            <Card.Text>
              <a href={cardsData[0].link}>{cardsData[0].linkText}</a>
            </Card.Text>
          </Card>
        </Col>
      </Row>

      <Row>
        {cardsData.slice(1).map((card, index) => (
          <Col lg={3} key={index} className="d-flex justify w-50">
            <Card className="text-center p-2 custom-card">
              <div className="icon-container">
                {card.icon}
              </div>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                <a href={card.link}>{card.linkText}</a>
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContactAddres;
