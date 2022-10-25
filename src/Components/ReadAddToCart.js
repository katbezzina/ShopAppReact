import { React, useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "../Style/ProductList.css";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

function ReadAddToCart() {
  const { user } = useAuth();
  const [items, setItems] = useState(null);
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const getItems = async () => {
    const cartlistRef = doc(db, "favourites", user.uid);
    const docSnap = await getDoc(cartlistRef);

    if (docSnap.exists()) {
      const { cartlist } = docSnap.data();
      setItems(cartlist);
    } else {
      const userDocRef = doc(db, "favourites", user.uid);
      setDoc(userDocRef, { cartlist: [] });
    }
  };

  // const deleteItems = async () => {
  //   await deleteDoc(doc(db, "favourites", cartObj)
  //   const cartlistRef = doc(db, "favourites", user.uid);
  //   try {
  //     await updateDoc(cartlistRef, {
  //       cartObj: deleteField([]),
  //     });
  //   } catch (error) {}
  //      console.log("items deleted")
  // };

  useEffect(() => {
    getItems();
  }, [user]);

  // if (counter <= 0) {
  //   setCounter(0);
  // }

  return (
    <div>
      <Row className="cardGrid">
        {items &&
          items.map((item) => {
            // console.log("item", item);
            return (
              <Card
                key={item.cartObj.id}
                style={{ width: "18rem" }}
                className="cardOutline"
              >
                <img
                  variant="top"
                  srcSet={item.cartObj.image}
                  alt=""
                  className="imgSize"
                />
                <Card.Body>
                  <Card.Title className="mediumText">
                    {item.cartObj.title}
                  </Card.Title>
                  <Card.Text className="smallText">
                    € {item.cartObj.price}
                  </Card.Text>
                  <div className="rightText">
                    <button className="qtyButtons" onClick={decrementCounter}>
                      {" "}
                      <FaMinus />
                    </button>
                    {counter}
                    <button className="qtyButtons" onClick={incrementCounter}>
                      <BsPlusLg />
                    </button>
                  </div>
                  {/* <button onClick={deleteItems}>Delete</button> */}
                </Card.Body>
              </Card>
            );
          })}
      </Row>
    </div>
  );
}

export default ReadAddToCart;
