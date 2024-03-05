import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './style.css'
import { Card, Col, Row } from "react-bootstrap";
import cookies from '../assets/cookies.png';
import food from '../assets/food.png';
import gift from '../assets/gift.png';
import flo from '../assets/flo.png';
import dates from '../assets/dates.png';
import pic from '../assets/pic.png';
import love from '../assets/love.png';
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate()
  const [offer, setOffer] = useState('He can bake pastries for you!')
  const [img, setImg] = useState(cookies);
  const [name, setName] = useState("Cookies");

  const onClick = () => {
    if (img === cookies) {
      setImg(food)
      setOffer('He can cook food for you!')
      setName("Food")
    }
    else if (img === food) {
      setImg(gift)
      setOffer("He'll write you poems and give you gifts!")
      setName("Poems & Gifts")
    }
    else if (img === gift) {
      setImg(flo)
      setOffer("He'll buy you your favorite flowers!")
      setName("Rei + Flowers")
    }
    else if (img === flo) {
      setImg(dates)
      setOffer("He'll take you out on dates!")
      setName("Cute Dates")
    }
    else if (img === dates) {
      setImg(pic)
      setOffer("He'll take great photos of you!")
      setName("Bungisngis <3")
    }
    else if (img === pic) {
      setImg(love)
      setOffer("And he'll love you with all he has.")
      setName("<3")
    } else {
      navigate('/marchseven/last')
    }
  }
  return (
    <Container className="container">
      <Row className="thanks">
        <Col>
          Thank you for choosing Raph!
        </Col>
      </Row>
      <Row className="offer">
        <Col>
          {offer}
        </Col>
      </Row>
      <Row className="image-row">
        <Col lg={2} >
          <Card style={{width: '20vw'}}>
            <Card.Img variant="top" src={img} className="img"/>
            <Card.Body>
              <Card.Title className="card-title">{name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>    
      </Row>
      <Row>
        <Col>
          <Row className="next-btn" onClick={onClick}>
            NEXT
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Offer;