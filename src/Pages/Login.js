import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MdAccountCircle } from "react-icons/md";
import "../Style/Login.css";

const Login = () => {
  // const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(email, password);
  // };
  return (
    <div className="LoginForm">
      <h1>
        Login to your <MdAccountCircle />
      </h1>
      <div className="LoginBox">
        <Form>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="E-mail address"
                value={email}
                onChange={handleEmailChange}
                className="transparent"
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="transparent"
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
