import React, {useState} from "react";

function NewTaskForm({allCategories, onTaskFormSubmit}) {
  const [infoObj, setInfoObj] = useState({
      text: "",
      category: ""
  })

  const handleChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    const temp = {...infoObj, [key]: val }
    setInfoObj(temp);
  }

  return (
    <form className="new-task-form" onSubmit={(e)=> onTaskFormSubmit(e, infoObj)}>
      <label>
        Details
        <input type="text" name="text" value={infoObj.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {allCategories.map((cat)=> <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
