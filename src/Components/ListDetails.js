import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillHeartFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import ImageCarousel from "./ImageCarousel";
import "../Style/ListDetails.css";
import CloseButton from "./CloseButton";
import Loading from "./Loading";

const ListDetails = () => {
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState(null);

  //fetchedData destructuring

  let api = `https://fakestoreapi.com/products/${id}`;

  // console.log(fetchedData);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((results) => results.json());
      setFetchedData(data);
      console.log("data", data);
    })();
  }, [api]);

  if (!fetchedData) return <Loading />;
  else {
    const { title, price, description, rating } = fetchedData;
    return (
      <Container key={id} className="detailCard">
        <Row>
          <Row>
            <CloseButton />
          </Row>
          <Col>
            <ImageCarousel />
          </Col>

          <Col className="productTextContainer">
            <h1 className="mediumText">{title}</h1>
            <p className="smallText">{description} </p>
            <h1 className="mediumText">€ {price} </h1>
            <Row>
              <Col>
                <ReactStars
                  count={5}
                  size={24}
                  value={rating.rate}
                  edit={false}
                />
              </Col>
            </Row>
            <Container className="listButton">
              <button className="purpleOutline">Add to cart</button>
              <button className="purpleFill">
                <BsFillHeartFill />
              </button>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ListDetails;
