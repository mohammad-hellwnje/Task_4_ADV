import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './FrquentlyAccordion.css';
function FrquentlyAccordion({ questions, answers }) {  
  return (
    <Container>
      <Accordion>
        {questions.map((question, index) => (
          <Accordion.Item eventKey={`${index}`} key={index} className='my-3'>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>
              {answers[index]}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default FrquentlyAccordion;
