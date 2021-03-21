import React from "react";
import TaskList from "./TaskList";

function Task({task, handleDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" value={task.text} onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;
