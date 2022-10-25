import React, { useContext, useEffect } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthContext";
import Search from "../Components/Search";
import { useState } from "react";
import ProductList from "../Components/ProductList";
import { ProductsContext } from "../Context/ProductsContext";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchProducts, fetchData } = useContext(ProductsContext);
  const { user } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  let searchedResult = searchProducts.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  // adding to cart

  const addProductToCart = async (product) => {
    // console.log(product);
    const cartObj = {
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
      qty: 1,
      // qty: FieldValue.increment(1),
    };

    try {
      const cartlistRef = doc(db, "favourites", user.uid);
      await updateDoc(cartlistRef, {
        cartlist: arrayUnion({ cartObj }),
      });
    } catch (e) {
      console.error("error", e);
    }
  };

  return (
    <div>
      <Search page="/" handleChange={handleChange} />

      {user === null ? (
        <ProductList products={searchedResult} />
      ) : (
        <ProductList
          products={searchedResult}
          onProductAction={addProductToCart}
        />
      )}
    </div>
  );
};

export default Home;
