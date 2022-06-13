import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, handleChange }) => (
  <input
    type="search"
    className={`${className} search-box`}
    placeholder={`${placeholder}`}
    onChange={handleChange}
  />
);

export default SearchBox;
