import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsDroplet, BsChatDots } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import "../Style/Navbar.css";

function navbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" sticky="top">
      <Container>
        <Link to="/" className="noUnderline">
          <Navbar.Brand>
            Dr
            <BsDroplet />p
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto collapseNavbar">
            <NavLink to="/" className="noUnderline">
              <AiOutlineHome /> Home
            </NavLink>
            <NavLink to="/Chat" className="noUnderline">
              <BsChatDots /> Chat
            </NavLink>
          </Nav>
          <Nav className="navbarButtons">
            <NavLink to="/Login" className="noUnderline loginButton">
              Log In
            </NavLink>
            <NavLink to="/Register" className="noUnderline registerButton ">
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
