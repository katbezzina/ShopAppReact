import React, { useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import { MdAccountCircle } from "react-icons/md";
import { useAuth } from "../Context/AuthContext";
import "../Style/Login.css";

const Register = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register, googleSignIn } = useAuth();
  const [error, setError] = useState("");


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

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      //to avoid from creating multiple accounts using signup
      register(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create your account");
    }
  }

  return (
    <div className="LoginForm">
      <h1>
        Create a new <MdAccountCircle />
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
                // value={email}
                // onChange={handleEmailChange}
                className="transparent"
                required
              />
            </FloatingLabel>

            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type="password"
                name="password"
                ref={passwordRef}
                // value={password}
                // onChange={handlePasswordChange}
                className="transparent"
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="password-confirm"
              label="Confirm Password"
            >
              <Form.Control
                type="password"
                name="password"
                ref={passwordConfirmRef}
                // value={password}
                // onChange={handlePasswordChange}
                className="transparent mt-3"
                required
              />
            </FloatingLabel>
          </Form.Group>
          <button
            type="submit"
            // disabled={loading}
            className="mb-3 registrationButton"
          >
            Create New Account
            </button>
        </Form>
        <GoogleButton onClick={handleGoogleSignIn} className="GoogleButton" />
        <hr />
        <div className="registerBox">
          <NavLink to="/Login">
            <button type="submit" className="LoginButton">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
