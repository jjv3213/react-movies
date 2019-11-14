import React from "react";

import { SearchWrapper } from "./SearchBarStyle";

const SearchBar = ({ handleChange }) => {
  return (
    <SearchWrapper>
      <input type="text" placeholder="Search movie" onChange={handleChange} />
    </SearchWrapper>
  );
};

export default SearchBar;
