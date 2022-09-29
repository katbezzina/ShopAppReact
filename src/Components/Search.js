import React, { useState } from "react";
import SearchList from "./SearchList";
import "../Style/Search.css"

const Search = ({ details }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredProducts = details.filter((product) => {
    return product.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // console.log("SI", searchInput);

  function searchlist() {
    return <SearchList filteredProducts={filteredProducts} />;
  }
  return (
    <section>
      <div className="searchButton"> 
        <input
          type="search"
          placeholder="Search for..."
          onChange={handleChange} className="searchBar"
          // value={searchInput}
        />
      </div>
      {searchlist()}
    </section>
  );
};

export default Search;
