import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { BsMoon } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";
import "../Style/App.css";

function Switch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={<BsMoon />}
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </Form>
    </div>
  );
}

export default Switch;
