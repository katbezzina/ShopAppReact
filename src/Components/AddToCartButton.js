import "../Style/ProductModal.css";
import { BsFillHandbagFill } from "react-icons/bs";

function AddToCartButton({ product, onClick }) {
  return (
    <button className="purpleFill" onClick={() => onClick(product)}>
      <BsFillHandbagFill />
    </button>
  );
}

export default AddToCartButton;
