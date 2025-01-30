import React, { useState } from "react";
import "../styles.css";

export default function FilterSlot({ label, optionList, handleFilterChange }) {
  const [chosenFilterValue, setFilterValue] = useState(optionList[0]);

  const onFilterChange = (e) => {
    const newFilterValue = e.target.value;
    setFilterValue(newFilterValue);
    handleFilterChange(newFilterValue);
  };

  return (
    <div className="filter-slot">
      <label>{label}</label>
      <select
        className="filter-dropdown"
        value={chosenFilterValue}
        onChange={onFilterChange}
      >
        {optionList.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
