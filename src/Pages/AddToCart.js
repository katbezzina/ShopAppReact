import { BsFillHandbagFill } from "react-icons/bs";
import ReadAddToCart from "../Components/ReadAddToCart";

function AddToCart() {
  return (
    <div>
      <h2>
        <BsFillHandbagFill />
        Your selected items <BsFillHandbagFill />
      </h2>
      <div>
        <ReadAddToCart />
      </div>
    </div>
  );
}

export default AddToCart;
