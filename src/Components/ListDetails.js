import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import "../Style/ListDetails.css";

const ListDetails = () => {
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState([]);

  //fetchedData destructuring
  let { category, title, image, price, description } = fetchedData;

  let api = `https://fakestoreapi.com/products/${id}`;

  console.log(fetchedData);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((results) => results.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <Card key={id} className="detailCard">
      <img variant="top" srcSet={image} alt="" className="imgSize"></img>
      <Card.Body>
        <Card.Title className="mediumText">{title}</Card.Title>
        <Card.Text className="smallText">
          {description} <br></br>
          <br></br>€ {price}
        </Card.Text>
        <Badge pill bg="warning" className="pillBadge">
          {category}
        </Badge>
        <div className="listButton">
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

export default ListDetails;
