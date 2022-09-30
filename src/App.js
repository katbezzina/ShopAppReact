import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

function App() {
  let [fetchedData, setFetchedData] = useState([]);
  let api = `https://fakestoreapi.com/products`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((results) => results.json());
      setFetchedData(data);
    })();
    //watching the api
  }, [api]);

  return (
    <div>
      <Navbar />
      <Search details={fetchedData} />
      <Footer />
    </div>
  );
}

export default App;
