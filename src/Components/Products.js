import React from "react";
import { FaRegHeart } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'

const Products = ({ fetchedData }) => {
  return (
    <div>
      {fetchedData.map((products) => {
        return (
          <div key={ products.id }>
            <div>
              <img srcSet={products.image} alt=""></img>
              <h1>{products.title}</h1>
              <p>€ {products.price}</p>
            </div>
            <div>
              <button>See product details</button>
              <div>
                <button><FaRegHeart /></button>
                <button><BsCart4 /></button>
              </div>
            </div>
            <div className="badge">{ products.category }</div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
