import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
 
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS)
  const [selectedOption, setSelectedOption] = useState('All')
  console.log('selectedOption', selectedOption)
  
  function addNewTask(newObj) {
    let newDisplay = [...tasksToDisplay, newObj]
    setTasksToDisplay(newDisplay)

  }
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={CATEGORIES}/>
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
