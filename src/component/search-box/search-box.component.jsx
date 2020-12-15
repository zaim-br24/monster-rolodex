import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handelSearchBox }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handelSearchBox}
  />
);
