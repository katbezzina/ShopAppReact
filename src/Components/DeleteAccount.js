import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useAuth } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";

function DeleteAccount(props) {
  const { deleteYourUser } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-light" onClick={handleShow} className="mb-4">
        Delete your account
      </Button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Are you sure you would like to delete this account?
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="noUnderline registerButton">
            No
          </button>
          <NavLink to="/Register">
            <button
              onClick={deleteYourUser}
              className="noUnderline loginButton"
            >
              Yes, delete
            </button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAccount;
