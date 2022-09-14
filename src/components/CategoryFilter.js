import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [prevSelect, setPrevSelect] = useState('')
  function handleClick(event) {
    console.log('prevSelect', prevSelect.className);
    // how to reset all buttons class names?
    (event.target.className === "selected" ? event.target.className = "" : event.target.className = "selected");
    console.log('event.target', event.target)
    setPrevSelect(event.target)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button key={category} onClick={handleClick}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
