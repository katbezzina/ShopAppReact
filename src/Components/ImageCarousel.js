import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import Loading from "./Loading";
import "../Style/ProductModal.css";

function ImageCarousel() {
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let { id } = useParams();
  const [index, setIndex] = useState(0);
  let [fetchedData, setFetchedData] = useState(null);

  let api = `https://fakestoreapi.com/products/${id}`;

  //   console.log(fetchedData);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((results) => results.json());
      setFetchedData(data);
    })();
  }, [api]);

  if (!fetchedData) return <Loading />;
  else {
    const { id, image } = fetchedData;

    return (
      <Carousel
        key={id}
        activeIndex={index}
        onSelect={handleSelect}
        className="carouselColor"
      >
        <Carousel.Item>
          <img className="productImageCarousel" src={image} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="productImageCarousel" src={image} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="productImageCarousel" src={image} alt="" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ImageCarousel;
