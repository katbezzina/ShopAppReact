import React from "react";
import ListItem from "./ListItem";
import "../Style/List.css";

function SearchList({ filteredProducts }) {
  const filtered = filteredProducts.map((product) => (
    <ListItem key={product.id} product={product} />
  ));

  return <div className="cardGrid">{filtered}</div>;
}

export default SearchList;
