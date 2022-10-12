import React from "react";
import Login from "./Login";

function NotLogged() {
  return (
    <div>
      <h1>You need to Login to access the chat </h1>
      <Login />
    </div>
  );
}

export default NotLogged;
