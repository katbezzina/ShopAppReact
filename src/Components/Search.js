import React from "react";
// import SearchList from "./SearchList";
import "../Style/Search.css";

function Search({ handleChange }) {
  return (
    <form className="searchButton">
      <input
        type="search"
        placeholder="Search for..."
        onChange={handleChange}
        className="searchBar"
        // value={searchInput}
      />
    </form>
  );
}

export default Search;
