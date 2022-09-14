import React, {useState} from "react";

function NewTaskForm({addNewTask, categories}) {
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('All')
  function handleSubmit(event) {
    event.preventDefault()

  }
  
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;
