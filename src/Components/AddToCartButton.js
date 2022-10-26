import "../Style/ProductModal.css";
import { BsFillHandbagFill } from "react-icons/bs";

function AddToCartButton({ product, onClick }) {
  // console.log(product);
  return (
    // call back function for onclick (more  usability)
    <button className="purpleFill" onClick={() => onClick(product)}>
      <BsFillHandbagFill />
    </button>
  );
}

export default AddToCartButton;
