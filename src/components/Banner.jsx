import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo_completo2.png";
import * as Icon from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
  console.log(Icon)
  
    
  return (
    <section className="banner" id="home" >
      <Container id="cont" >
        <Row className="main-banner" >
          <Col xs={12} md={6} xl={6}>
            
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} id="image-banner">
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility >
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""} id="texto-banner">
                
                <h1>{`Hi! I'm JC `} </h1>
                <p>My fullname is Jose Carlos Sáez Fernández. I'm 39 years old. I have studied Web development in Ironhack school. I am a junior full-stack web developer. I can make the website more, more interactive with web animation.
             When I first came to web brain, I had no knowledge of programming.
           But now with the help of strong aspirations and teachers, my level of knowledge has greatly increased and I can freely create web site views that are used in our daily lives.
        </p>
                 
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    
    
  )
}

export default Banner