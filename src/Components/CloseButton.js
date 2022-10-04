import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import "../Style/ListDetails.css";

function CloseButton() {
  let navigate = useNavigate();
  return (
    <>
      <button className="closeButton" onClick={() => navigate(-1)}>
        <BsArrowLeftSquareFill />
      </button>
    </>
  );
}

export default CloseButton;
