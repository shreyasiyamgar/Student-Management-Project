import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import a from "./img3.jpg";
import Home from "./Home";
import HomeWork from "./HomeWork";
import DoubtSolving from "./DoubtSolving";
import MyClass from "./MyClass";
import Calender from "./Calender";
import CircularSearch from "./CircularSearch";
import UsefulInfo from "./UsefulInfo";
import Profile from "./Profile";
import ComplaintForm from "./ComplaintForm";
import Attendanc from "./Attendenc";
import Events from "./Events";
 import Calender3 from "./Calender3"
import Calender4 from "./Calender4"
 import Calender5 from "./Calender5"
 import Calender6 from "./Calender6"
 import Calender7 from "./Calender7"
  import Calender8 from "./Calender8"
 import Calender9 from "./Calender9"
import RegistrationPage from "./RegistrationPage";
import Calender10 from "./Calender10"
import Calender11 from "./Calender11"
import Fee from "./Fee";
import FeeStructureTable from "./FeeStructureTable";
import ClassSelector from "./payOnline";
import FeeReceipt from "./FeeReceipt";
import { Calendar1 } from "lucide-react";
import Calendar2 from "./Calender2";

// Replace this with your actual logo

const Navbar = ({ onLogout }) => {
  
  return (
    <BrowserRouter>
      {/* ⬆️ Tall Navbar */}
      <nav className="bg-white shadow-lg mb-10">
        <div className="max-w-8xl mx-auto px-6 py-6 flex items-center justify-between min-h-[80px]">
          {/* 🔷 Logo + Name */}
          <div className="flex items-center space-x-5">
            <img
              src={a}
              alt="Logo"
              className="h-20 w-20 rounded-full object-cover"
            />
            <h1 className="text-3xl font-bold text-blue-700">Student Name</h1>
          </div>

          {/* 🔗 Navigation Links */}
          <div className="space-x-15 text-xl font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/profile" className="hover:text-blue-600 transition">My Profile</Link>
            <button onClick={onLogout} className="hover:text-blue-600 transition bg-transparent border-none cursor-pointer">Logout</button>
          </div>
        </div>
      </nav>

      {/* 📦 Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<HomeWork />} />
        <Route path="/queries" element={<DoubtSolving />} />
        <Route path="/calendar" element={<Calendar2/>} />
        <Route path="/editor" element={<MyClass />} />
        <Route path="/circular" element={<CircularSearch />} />
        <Route path="/infodesk" element={<UsefulInfo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Attendance" element={<Attendanc />} />
        <Route path="/Complaint" element={<ComplaintForm />} />
        <Route path="/Calender1" element={<Calendar1 />} />
         <Route path="/calender2" element={<Calendar2 />} />
           <Route path="/Calender3" element={<Calender3 />} />
           <Route path="/Calender4" element={<Calender4 />} />
           <Route path="/Calender5" element={<Calender5 />} />
             <Route path="/Calender6" element={<Calender6 />} />
               <Route path="/Calender7" element={<Calender7 />} />
                <Route path="/Calender8" element={<Calender8 />} />
                <Route path="/Calender9" element={<Calender9 />} />
                 <Route path="/Calender10" element={<Calender10/>} />  
                  <Route path="/Calender11" element={<Calender11 />} />
                  <Route path="/Calender" element={<Calender />} />      
        <Route path="/events" element={<Events />} />
         <Route path="/fee" element={<Fee/>} />
          <Route path="/fees" element={<FeeStructureTable/>} />
          <Route path="/feeson" element={<ClassSelector/>} />
          <Route path="/feesonr" element={<FeeReceipt/>} />
          <Route path="/register" element={<RegistrationPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
