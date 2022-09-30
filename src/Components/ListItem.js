import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import "../Style/List.css";

const ListItem = ({ product }) => {
  // const product = props.product;
  // product is a prop

  return (
    <Card key={product.id} style={{ width: "18rem" }} className="cardOutline">
      <img
        variant="top"
        srcSet={product.image}
        alt=""
        className="imgSize"
      ></img>
      <Card.Body>
        <Card.Title className="mediumText">{product.title}</Card.Title>
        <Card.Text className="smallText">€ {product.price}</Card.Text>
        <Badge pill bg="warning" className="pillBadge">
          {product.category}
        </Badge>
        <div className="listButton">
          <button className="purpleOutline" size="sm">
            View details
          </button>
          <button className="purpleFill">
            <BsFillHeartFill />
          </button>
          <button className="purpleFill">
            <BsFillCartFill />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
