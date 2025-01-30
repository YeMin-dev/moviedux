import React, { useState } from "react";
import "../styles.css";

export default function SearchBar({ handleSearchChange }) {
  const [inputValue, setInputValue] = useState("");

  const onSearchChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    handleSearchChange(newInputValue);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search movies..."
      value={inputValue}
      onChange={onSearchChange}
    />
  );
}
