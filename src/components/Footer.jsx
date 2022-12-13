import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import email from '../assets/img/email1.svg'
import github from "../assets/img/github.svg"
import * as Icon from "react-bootstrap-icons"
import logo from '../assets/img/nombre_y_eslogan2.png';


function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        
        <Col size={12} sm={6} id="img-footer">
        <a href='#home'>
             <img src={logo} alt="Logo" />
        </a>
       
        </Col>
        <Col size={12} sm={6} className="icons">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/jose-carlos-s%C3%A1ez-fern%C3%A1ndez-94824b258/" target="blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Josecarlossaez" target="blank" id="github-icon"><img src={github} alt="" /></a>
                <a href="mailto:jcsaezfernandez@gmail.com" id="email-icon"><img src={email} alt="" /></a>
          </div>
           <div className='navbar-text'>
              <a href="https://drive.google.com/file/d/1AVGSTAJ58WZnHbs_KwLqTfzXpYsDqP5R/view?usp=sharing" target="blank" style={{textDecoration:"none"}}>
                  <button className="vvd" id="curriculum"><span>Curriculum  <Icon.Download/></span></button>
              </a>   
        
            </div>
        </Col>
      </Row>
    </Container>
  </footer>

  )
}

export default Footer
              