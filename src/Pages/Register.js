import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MdAccountCircle } from "react-icons/md";
import "../Style/Login.css";

const Register = () => {
  // const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };

  // const handleRegister = (e) => {
  // 	e.preventDefault()
  // 	register(email, password)
  // }

  return (
    <div className="LoginForm">
      <h1>
        Create a new <MdAccountCircle />
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
            className="mb-3 registrationButton"
          >
            Create New Account
          </button>
        </Form>
        <hr />
        <div className="registerBox">
          <NavLink to="/Login">
            <button block="true" type="submit" className="LoginButton">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
