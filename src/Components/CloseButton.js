import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../Style/ProductModal.css";

function CloseButton() {
  let navigate = useNavigate();
  return (
    <>
      <button className="closeButton" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
    </>
  );
}

export default CloseButton;
