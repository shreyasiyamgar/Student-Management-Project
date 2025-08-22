import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Student from "./Student";
import "./Login.css";
import Home from "./Home"
import Admin from "./Admin"
const Login=()=>{
    return(
        <BrowserRouter>
        <div className="login-container">
             
            <h1>Select the Login</h1>
            <input type="checkbox" name="" id="Home" />
             <a href="/">Home</a>
             <br /><br />
        <input type="checkbox" name="" id="Student" />
         <a href="/Student">student</a>
         <br /><br />
         
         <input type="checkbox" name="" id="Admin" />
         <a href="/Admin">Admin</a>
         
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Student" element={<Student/>}></Route>
            <Route path="/Admin" element={<Admin/>}></Route>
            </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Login;