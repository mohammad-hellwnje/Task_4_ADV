import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Footer.css';

function Footer({ companyInfo, usefulLinks, services, hicSolutasetp, nobisIllum, socialLinks }) {
  return (
    <footer className="fr-bg py-4">
      <Container>
        <Row className="py-2 border-bottom border-secondary border-1">
          <Col md={4} className="mb-3">
            <h3 className='mb-5'>{companyInfo.name}</h3>
            <p className="small w-50">
              {companyInfo.address}
            </p>
            <p className='mb-0'>Phone: <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></p>
            <p>Email: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
            <div className="d-flex">
              {socialLinks.map((social, index) => (
                <div key={index} className='d-flex justify-content-center align-items-center icon-w-h border border-secondary rounded-circle me-2'>
                  <a href={social.link}>{social.icon}</a>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={2} sm={4} className="mb-3">
            <h5>Useful Links</h5>
            <ListGroup className="no-background">
              {usefulLinks.map((link, index) => (
                <ListGroup.Item key={index} className='px-0'><a href={link.url}>{link.label}</a></ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={2} sm={4} className="mb-3">
            <h5>Our Services</h5>
            <ListGroup className="no-background">
              {services.map((service, index) => (
                <ListGroup.Item key={index} className='px-0'><a href={service.url}>{service.label}</a></ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={2} sm={4} className="mb-3">
            <h5>Hic solutasetp</h5>
            <ListGroup className="no-background">
              {hicSolutasetp.map((item, index) => (
                <ListGroup.Item key={index} className='px-0'><a href={item.url}>{item.label}</a></ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={2} sm={4} className="mb-3">
            <h5>Nobis illum</h5>
            <ListGroup className="no-background">
              {nobisIllum.map((item, index) => (
                <ListGroup.Item key={index} className='px-0'><a href={item.url}>{item.label}</a></ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row className="text-center pt-4">
          <Col>
            <p className='mb-1'>&copy; Copyright <span className='fw-bolder'>{companyInfo.name}</span>. All Rights Reserved.</p>
            <p>Designed by <span className='main-color'>BootstrapMade</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
