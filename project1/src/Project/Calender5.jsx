import React from "react";
import { useNavigate } from 'react-router-dom';
const Calendar5 = () => {
  const navigate = useNavigate();
  const startDay = new Date(2025, 10, 1).getDay(); // November 1, 2025

  return (
    <div className="w-full min-h-screen bg-white font-sans p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button className="text-yellow-500 text-4xl sm:text-6xl" onClick={() => navigate('/')}>←</button>
        <h2 className="text-4xl sm:text-5xl font-bold text-center flex-grow mr-6">
          Calendar
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-300 mt-8 text-xl sm:text-4xl">
        <span className="pb-1 border-b-2 border-red-500 text-red-600 font-bold cursor-pointer">
          Calendar
        </span>
        <span className="text-gray-500 cursor-pointer"onClick={() => navigate('/events')}>Events</span>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <button className="text-4xl text-gray-700" onClick={() => navigate('/Calender4')}>{'<'}</button>
        <h3 className="text-2xl sm:text-4xl font-semibold">November, 2025</h3>
        <button className="text-4xl text-gray-700" onClick={() => navigate('/Calender6')}>{'>'}</button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center mt-8 font-semibold bg-indigo-500 text-white py-2 sm:py-3 text-lg sm:text-xl rounded-t-md">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 text-center bg-indigo-100 text-black py-2 sm:py-3 text-base sm:text-lg rounded-b-md">
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="py-3" />
        ))}
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="relative py-3">
              {day}
              {day === 5 && (
                <div className="absolute w-2 h-2 bg-red-600 rounded-full bottom-1 left-1/2 transform -translate-x-1/2"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Details */}
      <div className="flex flex-col gap-4 bg-indigo-100 mt-6 p-4 rounded-md w-full max-w-8xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="bg-pink-200 text-black rounded-lg p-2 w-16 text-center">
            <div className="text-xl sm:text-2xl font-bold">5</div>
            <div className="text-lg sm:text-xl lowercase">nov</div>
          </div>
          <div className="text-lg sm:text-2xl font-medium">Guru Nanak Jayanti</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar5;