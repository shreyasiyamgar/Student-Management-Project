import React from "react";
import { useNavigate } from 'react-router-dom';
const Calendar1 = () => {
  const navigate = useNavigate();
  const startDay = new Date(2025, 6, 1).getDay(); // July 1, 2025

  return (
    <div className="w-full min-h-screen bg-white font-sans p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button className="text-yellow-500 text-3xl sm:text-7xl"onClick={() => navigate('/')}>←</button>
        <h2 className="text-6xl sm:text-5xl font-bold text-center flex-grow mr-6">
          Calendar
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-300 mt-6 text-lg sm:text-4xl">
        <span className="pb-1 border-b-2 border-red-500 text-red-600 font-bold cursor-pointer">
          Calendar
        </span>
        <span className="text-gray-500 cursor-pointer" onClick={() => navigate('/events')}>Events</span>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <button className="text-2xl sm:text-5xl text-gray-700" onClick={() => navigate('/calender')}>{'<'}</button>
        <h3 className="text-3xl sm:text-3xl font-semibold">July, 2025</h3>
       <button className="text-4xl  text-gray-700" onClick={() => navigate('/calender2')}>{'>'}</button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center mt-8 text-2xl font-semibold bg-indigo-500 text-black py-2  rounded-t-md ">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 text-center bg-indigo-100 text-black text-semibold py-2 text-sm sm:text-base rounded-b-md h-80">
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="py-3"></div>
        ))}
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="py-3">
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar1;