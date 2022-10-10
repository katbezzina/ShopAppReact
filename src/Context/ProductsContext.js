// import React, { createContext, useState } from "react";

// export const ProductsContext = createContext();

// export const ProductsContextProvider = (props) => {
//   const [fetchedData, setFetchedData] = useState(null);
//   const [filter, setFilter] = useState([]);

//   const fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         return response.json();
//       })

//       .then((data) => {
//         const filteredProducts = data;
//         setFetchedData(data);
//         setFilter(filteredProducts);
//       });
//   };

//   return (
//     <ProductsContext.Provider
//       value={{ fetchedData, filter, fetchData, setFetchedData, setFilter }}
//     >
//       {props.children}
//     </ProductsContext.Provider>
//   );
// };
