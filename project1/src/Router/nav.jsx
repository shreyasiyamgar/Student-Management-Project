import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
const Nav = () =>{
    return(
        <BrowserRouter>
        <nav className="flex gap-48 bg-pink">
        <h1>Linkcode</h1>
        <ul className="flex justify-around w-80">
            <li> <a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Services">Services</a></li>
        </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
             <Route path="/About" element={<About/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
               <Route path="/Services" element={<Services/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export  default Nav;