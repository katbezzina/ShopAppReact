import { useState } from 'react'
import Card from "react-bootstrap/Card";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

const ShoppingItemCard = ({item}) => {

    // counter not stored in firestore!
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
    
    // deletion is not stored in firestore!
    if (counter === 0)
        return (null);
    else
  return (
              <Card
                key={item.cartObj.id}
                style={{ width: "18rem" }}
                className="cardOutline"
              >
                <img
                  variant="top"
                  srcSet={item.cartObj.image}
                  alt=""
                  className="imgSize"
                />
                <Card.Body>
                  <Card.Title className="mediumText">
                    {item.cartObj.title}
                  </Card.Title>
                  <Card.Text className="smallText">
                    € {item.cartObj.price}
                  </Card.Text>
                  <div className="rightText">
                    <button className="qtyButtons" onClick={decrementCounter}>
                      {" "}
                      <FaMinus />
                    </button>
                    {counter}
                    <button className="qtyButtons" onClick={incrementCounter}>
                      <BsPlusLg />
                    </button>
                  </div>
                  {/* <button onClick={deleteItems}>Delete</button> */}
                </Card.Body>
              </Card>
  )
}

export default ShoppingItemCard
