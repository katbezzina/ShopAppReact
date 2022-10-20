import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MdAccountCircle } from "react-icons/md";
import { BsDroplet, BsChatDots } from "react-icons/bs";
import "../Style/Login.css";
import DeleteAccount from "../Components/DeleteAccount";

const UserAccount = () => {
  const { user, userUpdate, logout } = useAuth();
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState(user.displayName);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      userUpdate(user.displayName);
    } else {
      setDisplayName(name);
      userUpdate(name);
    }
  };

  // const handleRemove = (e) => {
  //   deleteYourUser();
  // };

  return (
    <div className="LoginForm">
      <div className="mt-4 userName">
        Welcome to our Dr
        <BsDroplet />p Community, <br />
        {user.displayName === null ? `${user.email}` : displayName}
      </div>

      <div>
        <h1>
          Your <MdAccountCircle /> details{" "}
        </h1>
      </div>
      <Form className="LoginBox">
        <Form.Group>
          <FloatingLabel controlId="floatingName" />
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className="transparent"
          />
        </Form.Group>
        <button
          variant="warning"
          type="submit"
          onClick={handleUpdate}
          className="mb-3 LoginButton"
        >
          Update Details
        </button>
      </Form>
      <hr />
      <NavLink to="/Chat">
        <button className="mb-3 signupButton">
          <BsChatDots /> with us
        </button>
      </NavLink>
      <NavLink to="/Login">
        <button className="underlineButton mb-4" onClick={logout}>
          Not {user.displayName === null ? `${user.email}` : displayName}? Log
          out
        </button>
      </NavLink>
      {/* <NavLink to="/Register">
        <Button variant="outline-light" onClick={handleRemove} className="mb-4">
          Delete your Account
        </Button>
      </NavLink> */}
      <DeleteAccount />
    </div>
  );
};

export default UserAccount;
