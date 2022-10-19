import React from "react";
import { NavLink, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsDroplet, BsChatDots, BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import "../Style/Navbar.css";

import Switch from "./Switch";
import { useAuth } from "../Context/AuthContext";

const Navigation = () => {
  const { user, logout } = useAuth();

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
              <AiOutlineShop /> Shop <AiOutlineShop />
            </NavLink>
            <NavLink to="/Chat" className="noUnderline">
              <BsChatDots /> Chat <BsChatDots />
            </NavLink>
          </Nav>
          <Nav className="navbarButtons">
            <div>
              {user ? (
                <Nav className="navbarButtonsRow">
                  <Link to="/UserAccount" className="userName">
                    <MdAccountCircle />
                    {user.displayName === null
                      ? `${user.email}`
                      : `${user.displayName}`}
                  </Link>
                  {"|"}
                  <Link to="/AddToCart" className="addToCart">
                    <BsFillHandbagFill />
                  </Link>
                  {"|"}
                  <Link to="/Login">
                    <button
                      className="noUnderline loginButton"
                      onClick={logout}
                    >
                      Log out
                    </button>
                  </Link>
                </Nav>
              ) : (
                <Nav className="navbarButtons">
                  <Link to="/Login" className="noUnderline loginButton">
                    login
                  </Link>{" "}
                  <Link to="/Register" className="noUnderline registerButton">
                    register
                  </Link>
                </Nav>
              )}
            </div>
            <Switch />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
