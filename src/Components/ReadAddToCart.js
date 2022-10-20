import { React, useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthContext";

function ReadAddToCart() {
  const { user } = useAuth();
  const [cartProducts, setCartProducts] = useState("");

  const getCartProducts = async () => {
    const favouritesRef = collection(db, "favourites", user.uid, "cartlist");
    const q = query(favouritesRef, where(user.uid, "==", user.uid));

    const querySnapshot = await getDocs(q);
    const cartProducts = [];
    querySnapshot.forEach((doc) => {
      cartProducts.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    setCartProducts(cartProducts);
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  return <div>Hello</div>;
}

export default ReadAddToCart;
