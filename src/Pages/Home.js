import React, { useContext } from "react";
import Search from "../Components/Search";
import ProductList from "../Components/ProductList";
import { ProductsContext } from "../Context/ProductsContext";

const Home = () => {
  const { fetchedData, setFilter } = useContext(ProductsContext);

  function handleChange(event) {
    let inputValue = event.target.value;
    let searchedResult = fetchedData.filter((product) => {
      return product.title.toLowerCase().includes(inputValue);
    });
    // console.log("inputValue", inputValue);
    // console.log("searchedResult", searchedResult);
    setFilter(searchedResult);
  }

  const addToCart = (fetchedData) => {
    console.log(fetchedData);
  };

  return (
    <div>
      <Search page="/" handleChange={handleChange} />
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
