import React from "react";

const SearchBar = ({ handleChange }) => {
  return (
    <div>
      <input type="text" placeholder="Search movie" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
