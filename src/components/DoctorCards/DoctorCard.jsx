import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
const DoctorCard = ({ doctors }) => {  
  return (
    <Container>
      <Row className="gy-4">
        {doctors.map((doctor, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={doctor.image} alt={doctor.name} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text className='text-muted'>{doctor.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DoctorCard;
