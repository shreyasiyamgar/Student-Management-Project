import React, { useState } from "react";

 const FormHandling = () =>{
    const [Username,setUsername]=useState("");
    const [val,setval]=useState("");
    function handleChange(e){
        setUsername(e.target.value)
    }
    function handelsubmit(event){
        event.preventDefault();
        console.log("submitted");
        setval("successfully submitted")
    }
    
    return(
        <div className="height: 600px;
            width: 450px;
            background-color: rgb(178, 174, 210);
            margin: 70px 50px 100px 600px;
            border-radius: 30px;">
            <form action="" onSubmit={(event)=>{handelsubmit(event)}}>
                <label htmlFor="">Enter User Name:</label>
                <input type="text" value={Username} onChange={(e)=>handleChange(e)} />
                <br />
                <br />
                <label htmlFor="">Enter User Email-id:</label>
                <input type="email" name="" id="" />
                <br />
                <br />
                <label for="">ENTER STUDENT BIRTH DATE:</label>
                <input type="date" name="" id=""/>
        
                <br /><br />
                <label htmlFor="">Enter Password:</label>
                <input type="password" name="" id="" />
                <br /><br />
                <input type="submit" value="Submit" />
                <h1>{val}</h1>
            </form>
        </div>
    )
 }
 export default FormHandling;