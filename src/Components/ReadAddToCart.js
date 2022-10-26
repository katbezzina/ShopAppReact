import { React, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthContext";
import ShoppingItemCard from "./ShoppingItemCard";
import Row from "react-bootstrap/Row";
import "../Style/ProductList.css";

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
            console.log("item", item);
            return <ShoppingItemCard key={item.cartObj.id} item={item} />;
          })}
      </Row>
    </div>
  );
}

export default ReadAddToCart;
