import React from "react";
import { useNavigate } from 'react-router-dom';
const Calendar2 = () => {
  const navigate = useNavigate();
  const startDay = new Date(2025, 7, 1).getDay(); // August 1, 2025

  return (
    <div className="w-full min-h-screen bg-white font-sans p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button className="text-yellow-500 text-7xl sm:text-7xl"onClick={() => navigate('/')}>←</button>
        <h2 className="text-6xl sm:text-5xl font-bold text-center flex-grow mr-6">
          Calendar
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-300 mt-8 text-lg sm:text-4xl">
        <span className="pb-1 border-b-2 border-red-500 text-red-600 font-bold cursor-pointer">
          Calendar
        </span>
        <span className="text-gray-500 cursor-pointer"onClick={() => navigate('/events')}>Events</span>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <button className="text-3xl sm:text-5xl text-gray-700"onClick={() => navigate('/calender1')}>{'<'}</button>
        <h3 className="text-3xl sm:text-3xl font-semibold">August, 2025</h3>
        <button className="text-3xl sm:text-5xl text-gray-700"onClick={() => navigate('/Calender3')}>{'>'}</button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center mt-8 font-semibold bg-indigo-500 text-white py-2 sm:py-3 text-base sm:text-lg rounded-t-md">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 text-center bg-indigo-100 text-black py-2 sm:py-3 text-sm sm:text-base rounded-b-md">
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="py-3" />
        ))}
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="relative py-3">
              {day}
              {day === 27 && (
                <div className="absolute w-2 h-2 bg-red-600 rounded-full bottom-1 left-1/2 transform -translate-x-1/2"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Details */}
      <div className="flex items-center gap-4 bg-indigo-100 mt-6 p-4 rounded-md w-full max-w-8xl mx-auto">
        <div className="bg-pink-200 text-black rounded-lg p-2 w-14 text-center">
          <div className="text-lg sm:text-2xl font-bold">27</div>
          <div className="text-sm text-4xl lowercase">aug</div>
        </div>
        <div className="text-base sm:text-3xl font-medium">
          Ganesh Chaturthi
        </div>
      </div>
    </div>
  );
};

export default Calendar2;