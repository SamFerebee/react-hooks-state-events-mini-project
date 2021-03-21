import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [catToFilter, setCatToFiler] = useState("")
  const [fullTasks, setFullTasks] = useState(TASKS)
  const filterCategories = (category) => {
    setCatToFiler(category)
  }

  const handleForm = (e, info) => {
    e.preventDefault();
    const temp = [...fullTasks];
    temp.push(info)
    setFullTasks(temp)
  }

  const deleteTask = e =>{
    const temp = fullTasks.filter((task)=>!(task.text === e.target.value))
    setFullTasks(temp);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter allCategories={CATEGORIES} filterCallback={filterCategories}/>
      <NewTaskForm allCategories={CATEGORIES} onTaskFormSubmit={handleForm}/>
      <TaskList allTasks={fullTasks} catFilter={catToFilter} handleDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
