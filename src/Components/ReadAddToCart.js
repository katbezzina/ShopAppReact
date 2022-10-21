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
  //   const cartlistRef = doc(db, "favourites", user.uid);
  //   try {
  //     await updateDoc(cartlistRef, {
  //       cartObj: deleteField([]),
  //     });
  //   } catch (error) {}
  // };

  useEffect(() => {
    getItems();
  }, [user]);

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
                    <button className="qtyButtons">
                      {" "}
                      <FaMinus />
                    </button>
                    {item.cartObj.qty}
                    <button className="qtyButtons">
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
