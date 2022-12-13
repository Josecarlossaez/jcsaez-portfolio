import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/nombre_y_eslogan2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import email from '../assets/img/email1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from "../assets/img/github.svg"
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import * as Icon from "react-bootstrap-icons"
function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <div>
            <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className='logo-navbar' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jose-carlos-s%C3%A1ez-fern%C3%A1ndez-94824b258/" target="blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Josecarlossaez" target="blank" id="github-icon"><img src={github} alt="" /></a>
                <a href="mailto:jcsaezfernandez@gmail.com" id="email-icon"><img src={email} alt="" /></a>
              </div>  
              <a href="https://drive.google.com/file/d/1AVGSTAJ58WZnHbs_KwLqTfzXpYsDqP5R/view?usp=sharing" target="blank" style={{textDecoration:"none"}}>
                  <button className="vvd" id="curriculum"><span>Curriculum  <Icon.Download/></span></button>
              </a>   
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    </div>
  )
}

export default NavBar