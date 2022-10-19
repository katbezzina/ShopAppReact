import { React, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../context/firebase";
import { AuthContext } from "../context/authContext";

function ReadWishlist({ product }) {
  const { user } = useContext(AuthContext);

  const q = query(
    collection(db, "favourites", user.uid, "cartlist"),
    where(user.uid, "==", user.uid)
  );

  const querySnapshot = getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });

  return <div>Hello</div>;
}

export default ReadWishlist;
