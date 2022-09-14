import React from "react";

function CategoryFilter({categories, selectedOption, setSelectedOption }) {

  const buttons = categories.map((category) => {
    const btnClass = selectedOption === category ? "selected" : ""
    return (<button key={category} onClick={handleClick} className={btnClass} value={category}>{category}</button>)
  })

  function handleClick(event) {
    setSelectedOption(event.target.value)
    
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
