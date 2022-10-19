import React, { useState, useRef } from "react";
import GoogleButton from "react-google-button";
import { NavLink } from "react-router-dom";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import { MdAccountCircle } from "react-icons/md";
import "../Style/Login.css";

import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleSignIn } = useAuth();
  const [isShown, setIsSHown] = useState(false);
  const [error, setError] = useState("");

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleSubmit(e) {
    //preventing form from refreshing
    e.preventDefault();

    try {
      setError("");
      //to avoid from creating multiple accounts using signup
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    }
    console.log(emailRef, passwordRef);
  }
  return (
    <div className="LoginForm">
      <h1>
        LogIn to your <MdAccountCircle />
      </h1>
      {error && <Alert variant="warning">{error}</Alert>}
      <div className="LoginBox">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <FloatingLabel
              controlId="email"
              label="E-mail address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                ref={emailRef}
                className="transparent"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type={isShown ? "text" : "password"}
                name="password"
                ref={passwordRef}
                className="transparent"
                required
              />
            </FloatingLabel>
          </Form.Group>
          <div>
            <label htmlFor="checkbox" className="p-grey">
              Show password?
            </label>
            <input
              id="checkbox"
              type="checkbox"
              checked={isShown}
              onChange={togglePassword}
            />
          </div>
          <button
            block="true"
            type="submit"
            // onClick={handleLogin}
            className="mb-3 LoginButton"
          >
            Login
          </button>
        </Form>
        <div className="GoogleButton">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
        <hr />
        <div className="registerBox">
          <NavLink to="/Register">
            <button block="true" type="submit" className="signupButton">
              Create New Account
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
