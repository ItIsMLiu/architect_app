import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../style/About.css"
import "../style/Global.css"

function About() {
  return <>
    <Container className='aboutContent'>
      <Row className='p-3'>
        <Col sm={12}><h1>About</h1></Col>
      </Row>
      <Row className='p-3 d-flex align-items-end'>
        <Col sm={12} lg={6} className='p-3'>
          <img src='/about.png' className="card-img mx-auto d-block" alt="Rear of house and garden"></img>
        </Col>
        <Col sm={12} lg={6} className='p-3'>
          <h3 className='p-3'>We would love to hear about your project, and how we can help.</h3>
          <p className='p-3'>Don't hesitate to send us a message using the form or contact details below. Thank you for your interest!</p>
        </Col>
      </Row>
    </Container>
  </>
}

export default About;