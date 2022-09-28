import React, { useState, useEffect } from 'react'
import Products from "./Components/Products"
import Search from "./Components/Search"
import "./App.css";

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
    <div className="App">Raect</div>
    <Search fetchedData={fetchedData}/>
    <div>
      <Products fetchedData={ fetchedData } />
    </div>
  </div>;
}

export default App;
