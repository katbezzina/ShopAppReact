// import React, { useContext } from "react";
// import Search from "../Components/Search";
// import { ProductsContext } from "../Context/ProductsContext";

// const Home = () => {
//   const { fetchedData, setFilter } = useContext(ProductsContext);

//   function handleChange(event) {
//     let inputValue = event.target.value;
//     let searchedResult = fetchedData.filter((product) => {
//       return product.title.toLowerCase().includes(inputValue);
//     });
//     setFilter(searchedResult);
//   }

//   return (
//     <div>
//       <Search page="/" handleChange={handleChange} />
//     </div>
//   );
// };

// export default Home;
