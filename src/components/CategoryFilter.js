import React, {useState} from "react";

function CategoryFilter({categories, selectedOption, setSelectedOption}) {
  // const [selectedOption, setSelectedOption] = useState('All')
  // const [selectedClass, setSelectedClass] = useState('')
  // const [prevSelect, setPrevSelect] = useState('')
  // const btnClass = selectedOption ===  ? "selected" : ""

  const buttons = categories.map((category) => {
    const btnClass = selectedOption === category ? "selected" : ""
    return (<button key={category} onClick={handleClick} className={btnClass} value={category}>{category}</button>)
  })


  function handleClick(event) {
    // console.log('prevSelect', prevSelect.className);
    // how to reset all buttons class names?
    // (event.target.className === "selected" ? event.target.className = "" : event.target.className = "selected");
    // console.log('event.target', event.target)
    // setPrevSelect(event.target)
    console.log('event info', event.target.value)
    setSelectedOption(event.target.value)
    
  }
  // i want to assign the selected classname IF the key === selectedOption, and remove the classname if not


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* {categories.map(category => (
        <button key={category} onClick={handleClick} className={''}>{category}</button>
      ))} */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
