import React from "react";
import ProductList from "./ProductList";
import "../Style/ProductList.css";

function SearchList({ filteredProducts }) {
  const filtered = filteredProducts.map((product) => (
    <ProductList key={product.id} product={product} />
  ));

  return <div className="cardGrid">{filtered}</div>;
}

export default SearchList;
