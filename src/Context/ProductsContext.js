import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);

  let api = `https://fakestoreapi.com/products`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api);
      let response = await data.json();
      setProducts(response);
      setSearchProducts(response);
      console.log("response", response);
    })();
  }, []);

  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((data) => {
  //       const filteredProducts = data;
  //       setProducts(data);
  //       setSearchProducts(filteredProducts);

  //       // console.log("data", data);
  //     });
  // };

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchProducts,

        setProducts,
        setSearchProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
