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
      <Row className='p-3 d-flex align-items-center'>
        <Col md={12} lg={6} className='p-3'>
          <img src='/about.png' className="card-img mx-auto d-block" alt="Front of house and garden"></img>
        </Col>
        <Col md={12} lg={6} className='p-3'>
          <p className='p-3'>Welcome to ZenArch, we're a passionate team of architects and designers dedicated to creating spaces that inspire and endure.With a focus on collaboration and sustainability, we work closely with clients to bring their visions to life. From residential to commercial projects, we blend creativity with practicality to deliver exceptional results.</p>
        </Col>
      </Row>
    </Container>
  </>
}

export default About;