import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"


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

  return <div>
    <Navbar />
    <Search details={fetchedData} />
    <div>Footer</div>
  </div>;
}

export default App;
