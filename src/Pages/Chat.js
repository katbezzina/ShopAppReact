import React from "react";
import { useAuth } from "../Context/AuthContext";

const Chat = () => {
  const { checkIfUserIsLogged } = useAuth();

  return <div>Chat with us</div>;
};

export default Chat;
