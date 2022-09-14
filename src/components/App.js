import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
 
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS)
  const [selectedOption, setSelectedOption] = useState('All')
  
  function addNewTask(newObj) {
    setTasksToDisplay([...tasksToDisplay, newObj])
  }
  
  function deleteTask(taskToDelete) {
    const newList = tasksToDisplay.filter((task) => task.text !== taskToDelete)
    console.log('newList', newList)
    setTasksToDisplay(newList)
  }

  const filteredTasks = tasksToDisplay.filter((task) => selectedOption === "All" || task.category === selectedOption)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
