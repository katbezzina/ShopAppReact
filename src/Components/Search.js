import React from "react";
import "../Style/Search.css";

function Search({ handleChange }) {
  return (
    <form className="searchButton">
      <input
        type="search"
        placeholder="Search for..."
        onChange={handleChange}
        className="searchBar"
      />
    </form>
  );
}

export default Search;
