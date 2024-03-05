import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './style.css'
import { Col, Image, Row } from "react-bootstrap";
import hk from '../assets/hk.png'
import mm from '../assets/mm.png'
import c from '../assets/c.png'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [text, setText] = useState('Hola, Rei!')
  const navigate = useNavigate()

  const onClick = () => {
    if (text === 'Hola, Rei!') {
      setText("It's time to pick your BF! •ᴗ•")
    } else {
      navigate('/marchseven/pick')
    }
  }
  return (
    <Container className="container">
      <Row className={text === 'Hola, Rei!' ? 'landing-text' : 'landing-text-pick'}>
        <Col>
          {text}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="next-btn" onClick={onClick}>
            NEXT
          </Row>
        </Col>
      </Row>
      <Row className="image-row">
        <Col lg={2} >
          <Image src={hk} className="image-col" fluid/>
        </Col>
        <Col lg={2} >
          <Image src={mm} className="image-col" fluid/>
        </Col>
        <Col lg={2} >
          <Image src={c} className="image-col-c" fluid/>
        </Col>
        
      </Row>
      
    </Container>
  )
}

export default LandingPage;