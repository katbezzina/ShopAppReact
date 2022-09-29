import React, { useState } from "react";
import SearchList from "./SearchList";

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
      <div>
        <input
          type="search"
          placeholder="Filter for product..."
          onChange={handleChange}
          // value={searchInput}
        />
      </div>
      {searchlist()}
    </section>
  );
};

export default Search;
