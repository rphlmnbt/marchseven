import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './style.css'
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Last = () => {
  const [text, setText] = useState('I love you so much, Rei! <3')
  const [buttonText, setButtonText] = useState('NEXT')
  const navigate = useNavigate()

  const onClick = () => {
    if (text === 'I love you so much, Rei! <3') {
      setText("Will you date me with the intent to marry?")
      setButtonText("YES")
    } else {
      setText("Happy March 7th!")
    }
  }
  return (
    <Container className="container">
      <Row className={'text'}>
        <Col>
          {text}
        </Col>
      </Row>
      {
        text !== 'Happy March 7th!' &&
        <Row style={{display: 'flex', flexDirection: 'row'}}>
        <Col>
          <Row className="next-btn" onClick={onClick}>
            {buttonText}
          </Row>
        </Col>
        {
            buttonText === "YES" &&
            <>
            <Col>
              <Row style={{
                fontSize: '40px',
                color: '#896143',
                textAlign: 'center',
                marginLeft: '2vw',
                marginRight: '2vw'
              }}>
                or
              </Row>        
            </Col>
            <Col>
              <Row className="next-btn" onClick={onClick}>
                {buttonText}
              </Row>
            </Col>
            </>
            
          }
      </Row>}
    </Container>
  )
}

export default Last;