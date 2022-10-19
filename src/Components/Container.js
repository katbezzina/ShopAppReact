import React, { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import "../Style/App.css";

function Container({ children }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "Containerdark" : "Containerlight"}>
      {children}
    </div>
  );
}

export default Container;
