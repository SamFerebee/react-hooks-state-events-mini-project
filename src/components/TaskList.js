import React from "react";
import Task from "./Task"

function TaskList({allTasks, catFilter, handleDeleteTask}) {
  const filteredTasks = allTasks.filter((task)=>{
    if(catFilter === "" || catFilter === "All") return true
    return (task.category === catFilter)
  })
  return (
    <div className="tasks">
      {filteredTasks.map((task) => <Task key={task.text} task={task} handleDeleteTask={handleDeleteTask} />)}
    </div>
  );
}

export default TaskList;
