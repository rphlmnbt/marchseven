import React from "react";
import Container from 'react-bootstrap/Container';
import './style.css'
import { Card, Col, Row } from "react-bootstrap";
import r1 from '../assets/1.jpg';
import r2 from '../assets/2.jpg';
import r3 from '../assets/3.jpg';
import { useNavigate } from "react-router-dom";

const Pick = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/marchseven/offer')
  }
  return (
    <Container className="container">
      <Row className="instructions">
        <Col>
          Pick your BF! Here are your options:
        </Col>
      </Row>
      <Row className="image-row">
        <Col lg={2} >
          <Card style={{width: '20vw'}} onClick={onClick}>
            <Card.Img variant="top" src={r1} className="img"/>
            <Card.Body>
              <Card.Title className="card-title">Raph</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} >
          <Card style={{width: '20vw'}} onClick={onClick}>
            <Card.Img variant="top" src={r2} className="img"/>
            <Card.Body>
              <Card.Title className="card-title">Raph</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} >
          <Card style={{width: '20vw'}} onClick={onClick}>
            <Card.Img variant="top" src={r3} className="img"/>
            <Card.Body>
              <Card.Title className="card-title">Raph</Card.Title>
            </Card.Body>
          </Card>
        </Col>        
      </Row>
    </Container>
  )
}

export default Pick;