import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../Style/ProductModal.css";

function BackButton() {
  let navigate = useNavigate();
  return (
    <>
      <button className="backButton" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
    </>
  );
}

export default BackButton;
