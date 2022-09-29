import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const ListItem = ({ product }) => {
  // const product = props.product;
  //product is a prop

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" srcSet={product.image} alt=""></Card.Img>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>€ {product.price}</Card.Text>
              <Badge pill bg="dark">
                {product.category}
              </Badge>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ListItem;
