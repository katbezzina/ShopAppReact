import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MdAccountCircle } from "react-icons/md";
import "../Style/Login.css";

const Login = () => {
  // const { login } = useContext(AuthContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   console.log(password);
  //   setPassword(e.target.value);
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(email, password);
  // };
  return (
    <div className="LoginForm">
      <h1>
        LogIn to your <MdAccountCircle />
      </h1>
      <div className="LoginBox">
        <Form>
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
          </Form.Group>
          <button
            block="true"
            type="submit"
            // onClick={handleLogin}
            className="mb-3 LoginButton"
          >
            Login
          </button>
        </Form>
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
