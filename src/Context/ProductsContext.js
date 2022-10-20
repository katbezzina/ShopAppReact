import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        const filteredProducts = data;
        setFetchedData(data);
        setSearchProducts(filteredProducts);

        // console.log("data", data);
      });
  };

  return (
    <ProductsContext.Provider
      value={{
        fetchedData,
        searchProducts,
        fetchData,
        setFetchedData,
        setSearchProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
