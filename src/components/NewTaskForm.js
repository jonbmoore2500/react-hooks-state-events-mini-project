import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('All')
  const formCategories = categories.filter(category => category !== "All")
  
  function handleSubmit(e) {
    e.preventDefault();
    // console.log('hi', newName, newCategory)
    let newTaskObj = {
      text: newName,
      category: newCategory
    }
    console.log(newTaskObj)
    onTaskFormSubmit(newTaskObj)
  }
  
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setNewName(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setNewCategory(e.target.value)}>
          {formCategories.map((category) => (
            <option key={category} value={category} >{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
