// import React, { useContext } from "react";
// import Search from "../Components/Search";
// import { ProductsContext } from "../Context/ProductsContext";

// const Home = () => {
//   const { fetchedData, setFilter } = useContext(ProductsContext);
//   //   let [fetchedData, setFetchedData] = useState([]);
//   //   let api = `https://fakestoreapi.com/products`;

//   //   useEffect(() => {
//   //     (async function () {
//   //       let data = await fetch(api).then((results) => results.json());
//   //       setFetchedData(data);
//   //     })();
//   //     //watching the api
//   //   }, [api]);

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
