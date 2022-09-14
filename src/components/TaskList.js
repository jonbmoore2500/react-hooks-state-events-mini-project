import React, {useState} from "react";
import Task from "./Task.js"

function TaskList({tasks}) {
  const [tasksToDisp, setTasksToDisp] = useState(tasks)
  
  function deleteTask(textToDelete) {
    const newList = tasksToDisp.filter((task) => task.text !== textToDelete)
    setTasksToDisp(newList)
  }

  return (
    <div className="tasks">
      {tasksToDisp.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDeleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
