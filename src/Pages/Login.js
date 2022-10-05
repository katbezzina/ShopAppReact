import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

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
      <div className="login-title">
        <h2>Login</h2>
      </div>

      <Form className="form-container">
        <Form.Group>
          <FloatingLabel
            controlId="floatingInput"
            label="E-mail"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Button
          block="true"
          variant="warning"
          type="submit"
          // onClick={handleLogin}
          className="mb-2"
        >
          Login
        </Button>
        <hr />
        <p>Do not have an account yet?</p>
        <Button block="true" type="submit" className="btn-sign-up">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Login;
