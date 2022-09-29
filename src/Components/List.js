import React from "react";

import ListItem from "./ListItem";

import Card from "react-bootstrap/Card";

const List = ({ fetchedData }) => {
  return (
    <div>
      {fetchedData.map((product) => {
        return <ListItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default List;
