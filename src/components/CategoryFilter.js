import React, {useState} from "react";
import Button from "./Button"

function CategoryFilter({allCategories, filterCallback}) {
  const [selected,setSelected]= useState("")

  const handleSelected = (id) => {
    setSelected(id);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories.map((cat)=>
        <Button 
          key={cat} 
          category={cat} 
          filterCallback={filterCallback} 
          setSelected={handleSelected} 
          cn={cat === selected? "selected": ""} 
        /> 
      )}
    </div>
  );
}

export default CategoryFilter;
