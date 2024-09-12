import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactForm.css';

function ContactForm() {
    return (
        <Container>
            <Row className='h-100 '>
                <Col lg={6} xs={12} className='w-100'>
                    <Form className='d-flex flex-column justify-content-between h-100 shadow-box2 my-4 m-lg-0'>
                        <Row>
                            <Col xs={6}>
                                <Form.Group controlId="formNameFirst" className='mb-3 m-lg-0'>
                                    <Form.Control type="text" placeholder="Enter your first name" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group controlId="formEmail" className='mb-3 m-lg-0'>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formSubject" className='mb-3 m-lg-0'>
                            <Form.Control type="text" placeholder="Enter the subject" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className='mb-3 m-lg-0'>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                        </Form.Group>
                        <Row>
                            <Col className='d-flex flex-column justify-content-center'>
                            <button type="button" className="border-0 rounded py-2 bg-color text-light w-25 m-auto">Send</button> 
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;
