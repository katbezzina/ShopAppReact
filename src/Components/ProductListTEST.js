// import { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";

// import Card from "react-bootstrap/Card";
// import Badge from "react-bootstrap/Badge";
// import Row from "react-bootstrap/Row";
// import { BsFillHeartFill } from "react-icons/bs";
// import "../Style/ProductList.css";
// import { ProductsContext } from "../Context/ProductsContext";

// const ProductList = () => {

//   const { filter, fetchData } = useContext(ProductsContext);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Row>
//       {filter ? (
//         filter.map(({ id, title, image, category, price }) => (
//           <Card key={id} style={{ width: "18rem" }} className="cardOutline">
//             <img variant="top" srcSet={image} alt="" className="imgSize"></img>
//             <Card.Body>
//               <Card.Title className="mediumText">{title}</Card.Title>
//               <Card.Text className="smallText">€ {price.toFixed(2)}</Card.Text>
//               <Badge pill bg="warning" className="pillBadge">
//                 {category}
//               </Badge>
//               <div className="listButton">
//                 <Link to={`${id}`}>
//                   <button className="purpleOutline" size="sm">
//                     View details
//                   </button>
//                 </Link>
//                 <button className="purpleFill">
//                   <BsFillHeartFill />
//                 </button>
//               </div>
//             </Card.Body>
//           </Card>
//         ))
//       ) : (
//         <p>Not found</p>
//       )}
//     </Row>
//   );
// };

// export default ProductList;
