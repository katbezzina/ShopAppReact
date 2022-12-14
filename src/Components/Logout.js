import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../Style/Navbar.css";

function Logout(props) {
  const { logout } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="noUnderline loginButton">
        Logout
      </button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you sure you would like to log out?</Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="noUnderline registerButton">
            No
          </button>
          <Link to="/Login">
            <button onClick={logout} className="noUnderline loginButton">
              Log out
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logout;
