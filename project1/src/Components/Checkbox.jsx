import React, { useState } from "react";
const Checkbox =()=>{
    const[skills,setSkills]=useState([]);
    const handleChange=(e)=>{
        console.log(e.target.value,e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value]);
        }else{
            setSkills(skills.filter(val=>val!==e.target.value));
        }
    }
    return(
        <>
        <h1>Select skills</h1>
        <input type="checkbox" name="" id="java" value={'Java'} onChange={handleChange}/>
        <label htmlFor="Java">Java</label>
        <input type="checkbox" name="" id="React" value={'React'} onChange={handleChange}/>
        <label htmlFor="React">React</label>
        <input type="checkbox" name="" id="Springboot" value={'Sprinboot'} onChange={handleChange}/>
        <label htmlFor="Springboot">Springboot</label>
        <input type="checkbox" name="" id="Css" value={'Css'} onChange={handleChange}/>
        <label htmlFor="Css">Css</label>
        <h5>Selected Skills Are:{skills}</h5>
        </>
    )

}
export default Checkbox;