import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsDroplet , BsChatDots } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import "../Style/Navbar.css"

function navbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" sticky="top">
      <Container >
        <Navbar.Brand href="#home">Dr<BsDroplet/>p</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto collapseNavbar">
            <Nav.Link href="#home"><AiOutlineHome/>  Home</Nav.Link>
            <Nav.Link href="#chat"><BsChatDots />  Chat</Nav.Link>
          </Nav>
          <Nav className="navbarButtons">
            <Nav.Link href="#login" className="loginButton">Log In</Nav.Link>
            <Nav.Link href="#register" className="registerButton">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar
