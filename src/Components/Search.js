import React, { useState } from "react";

const Search = ({ fetchedData }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    fetchedData.filter((products) => {
      return products.title.includes(searchInput);
    });
  }
  console.log("SI", searchInput);

  return (
    <div>
      <input
        type="search"
        placeholder="Filter for product..."
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default Search;
