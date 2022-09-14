import React from "react";
import Task from "./Task.js"

function TaskList({tasks, onDelete}) {  
  function deleteTask(textToDelete) {
    onDelete(textToDelete)
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDeleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
