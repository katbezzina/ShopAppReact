import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const ListItem = (props) => {
  const product = props.product;

  return (
    <Container>
      <Card key={product.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" srcSet={product.image} alt=""></Card.Img>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>€ {product.price}</Card.Text>
          <div>
            <Badge bg="dark">{product.category}</Badge>
          </div>
          <Button variant="warning">See product details</Button>

          <div>
            <Button variant="outline-dark" outline="dark">
              <FaRegHeart />
            </Button>
            <Button variant="outline-dark">
              <BsCart4 />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListItem;
