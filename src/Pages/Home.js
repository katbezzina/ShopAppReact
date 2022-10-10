import React, { useState, useEffect } from "react";
import Search from "../Components/Search";

const Home = () => {
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
      <Search page="/" details={fetchedData} />
    </div>
  );
};

export default Home;
