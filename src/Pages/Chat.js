import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useAuth } from "../Context/AuthContext";
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
  limitToLast,
} from "firebase/firestore";

import { BsChatDots } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "../Style/Chat.css";

function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [displayName] = useState(user.displayName);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    setMessage("");
    const messageObj = {
      text: message,
      timestamp: new Date(),
      email: user.email,
      userID: user.uid,
    };
    try {
      const docRef = await addDoc(collection(db, "messages"), messageObj);
    } catch (e) {
      // console.log("Document written with ID: ", docRef.id);
      // getMessages();

      console.log(e);
    }
    window.scrollTo(0, document.body.scrollHeight);
    getMessages();
  };

  const getMessages = async () => {
    const arr = [];
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "asc"),
      limitToLast(6)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      arr.push(doc.data());
    });
    setMessages(arr);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h2>
        <BsChatDots /> with us,{" "}
        {user.displayName === null ? `${user.email}` : displayName}
      </h2>
      <div>
        {messages &&
          messages.map((msg, index) => (
            <div className="chatBox" key={index}>
              <ul className="listStyle">
                <li className={msg.email === user.email ? "mine" : "notmine"}>
                  <div>
                    <div className="chatText">{msg.text}</div>
                    <p className="subText">
                      {msg.email} |{" "}
                      {msg.timestamp.toDate().toLocaleString("de")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          ))}
      </div>
      <InputGroup className="p-3 inputChat">
        <FormControl
          placeholder="Your message"
          aria-label="Your message"
          aria-describedby="basic-addon1"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="sendButton" onClick={sendMessage}>
          <TbSend />
        </button>
      </InputGroup>
    </div>
  );
}

export default Chat;
