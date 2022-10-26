import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import { BsHandbagFill } from "react-icons/bs";
import "../Style/ProductList.css";
import AddToCartButton from "./AddToCartButton";

const ProductList = ({ products, onProductAction }) => {
  return (
    <div>
      <Row className="cardGrid">
        {/* // .length to not render if length = 0 */}
        {products.length ? (
          products.map((product) => {
            const { id, image, title, category, price } = product;

            return (
              <Card key={id} style={{ width: "18rem" }} className="cardOutline">
                <img srcSet={image} alt="" className="imgSize"></img>
                <Card.Body>
                  <Card.Title className="mediumText">{title}</Card.Title>
                  <Card.Text className="smallText">
                    € {price.toFixed(2)}
                  </Card.Text>
                  <Badge pill bg="warning" className="pillBadge">
                    {category}
                  </Badge>
                  <div className="listButton">
                    <Link to={`${id}`}>
                      <button className="purpleOutline">View details</button>
                    </Link>
                    {/* This allows the ProductList to be used with or without action buttons */}
                    {onProductAction && (
                      <AddToCartButton
                        product={product}
                        onClick={onProductAction}
                      />
                    )}
                  </div>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <p>Please wait to load data</p>
        )}
      </Row>
    </div>
  );
};

export default ProductList;
