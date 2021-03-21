import React, {useState} from "react";
const Button = ({category, filterCallback, setSelected, cn}) => {
    const [classInfo, setClassInfo] = useState("");

    const handleClick = e => {
        if(classInfo === "selected"){
            setClassInfo("")
        }else {
            setClassInfo("selected")
        }
        setSelected(e.target.value);
        filterCallback(e.target.value);
    }

    return <button className={cn} onClick={handleClick} value={category}>{category}</button>
}

export default Button