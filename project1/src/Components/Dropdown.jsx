import React, { useState } from "react";
 const Dropdown=()=>{
    const[gender,setgender]=useState('other');
    const[state,setstate]=useState('');
    return(
        <div>
            <h1>Select Gender</h1>
            <input type="radio" name="" id="male" value={'Male'} checked={'Male'===gender} onChange={(e)=>{setgender(e.target.value)}}/>
            <label htmlFor="Male">Male</label>

            <input type="radio" name="" id="female" value={'Female'} checked={'Female'===gender} onChange={(e)=>{setgender(e.target.value)}}/>
            <label htmlFor="Male">Female</label>

            <input type="radio" name="" id="other" value={'other'} checked={'other'===gender} onChange={(e)=>{setgender(e.target.value)}}/>
            <label htmlFor="Male">other</label>
            <h3>Selected Gender:{gender}</h3>
            <h1>Select State:</h1>
            <select name="" id="" onChange={(e)=>{setstate(e.target.value)}}defaultValue={'Solapur'}>
                <option value="solapur">Solapur</option>
                <option value="Pune">Pune</option>
                <option value="Pandharpur">Pandharpur</option>
                <option value="Satara">Satara</option>
            </select>
            <h3>Selected Satet is:{state}</h3>
        </div>
    )

 }
 export default Dropdown;