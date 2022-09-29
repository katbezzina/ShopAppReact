import React from "react";
import ListItem from "./ListItem";

function SearchList({ filteredProducts }) {
  const filtered = filteredProducts.map((product) => (
    <ListItem key={product.id} product={product} />
  ));

  return <div>{filtered}</div>;
}

export default SearchList;
