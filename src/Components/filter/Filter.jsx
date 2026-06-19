import { useState } from "react";
import './filter.css'

const Filter = ({ handleFilter }) => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleFilter(event.target.value);
  };

  return (
      <div className="filter-container">
        <h3 className="filter-heading">Filter by:</h3>
        <div className="filter-options">
          <label>
            <input
                type="radio"
                name="filter"
                value="all"
                checked={selectedOption === "all"}
                onChange={handleOptionChange}
            />
            All
          </label>
          <label>
            <input
                type="radio"
                name="filter"
                value="notebook"
                checked={selectedOption === "notebook"}
                onChange={handleOptionChange}
            />
            Notebook
          </label>
          <label>
            <input
                type="radio"
                name="filter"
                value="phone"
                checked={selectedOption === "phone"}
                onChange={handleOptionChange}
            />
            Phone
          </label>
          <label>
            <input
                type="radio"
                name="filter"
                value="headphones"
                checked={selectedOption === "headphones"}
                onChange={handleOptionChange}
            />
            Headphones
          </label>
        </div>
      </div>
  );
};

export default Filter;

