import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { BsMoon } from "react-icons/bs";
import { DarkModeContext } from "../Context/DarkModeContext";
import "../Style/App.css";

function Switch() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={<BsMoon />}
        onClick={handleClick}
        className="switchBackground"
      />
    </Form>
  );
}

export default Switch;
