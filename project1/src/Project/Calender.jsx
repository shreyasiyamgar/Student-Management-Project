import React from "react";
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();
  const startDay = new Date(2025, 5, 1).getDay(); // June 1, 2025
  

  return (
    <div className="w-full min-h-screen bg-white font-sans p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button className="text-yellow-500 text-6xl" onClick={() => navigate('/')}>←</button>
       
        <h2 className="text-2xl sm:text-5xl font-bold text-center flex-grow mr-6">
          Calendar
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-300 mt-8 text-lg sm:text-3xl">
        <span className="pb-1 border-b-2 border-red-500 text-red-600 font-bold cursor-pointer">
          Calendar
        </span>
        <button className="text-gray-500 cursor-pointer hover:text-red-500" onClick={() => navigate('/events')} >Events</button>
        {/* <span className="text-gray-500 cursor-pointer" path="/Event">Events</span> */}
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <button className="text-4xl  text-gray-700" onClick={() => navigate('/calender11')}>{'<'}</button>
        <h3 className="text-xl sm:text-4xl font-semibold">June, 2025</h3>
        <button className="text-4xl text-gray-700" onClick={() => navigate('/Calender1')}>{'>'}</button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center mt-8 font- semibold bg-indigo-500 text-white py-2 text-2xl rounded-t-md">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 text-center bg-indigo-100 text-black py-2 text-sm sm:text-base rounded-b-md">
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="py-3"></div>
        ))}
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="relative py-3">
              {day}
              {/* Dot for event on 19th */}
              {day === 19 && (
                <div className="absolute w-2 h-2 bg-red-600 rounded-full bottom-1 left-1/2 transform -translate-x-1/2"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Details */}
      <div className="flex items-center gap-4 bg-indigo-100 mt-6 p-4 rounded-md w-full max-w-9xl mx-auto">
        <div className="bg-pink-200 text-black rounded-lg p-2 w-16 text-center">
          <div className="text-lg sm:text-xl font-bold">19</div>
          <div className="text-lg lowercase">jun</div>
        </div>
        <div className="text-base sm:text-2xl font-medium">NID (Palkhi Procession)</div>
      </div>
    </div>
  );
};

export default Calendar;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 

// const Calendar = () => {
//   const [month, setMonth] = useState(5); // 0 = Jan, 5 = June
//   const [year, setYear] = useState(2025);
//   const navigate = useNavigate(); 

//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   // Get first day and number of days in the current month
//   const startDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   // Handle previous month
//   const prevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear(year - 1);
//     } else {
//       setMonth(month - 1);
//     }
//   };

//   // Handle next month
//   const nextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear(year + 1);
//     } else {
//       setMonth(month + 1);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-white font-sans p-4 sm:p-6 md:p-8">
//       {/* Header */}
//       <div className="flex items-center gap-2">
//         <button className="text-yellow-500 text-6xl" onClick={() => navigate('/')}>←</button>
//         <h2 className="text-2xl sm:text-5xl font-bold text-center flex-grow mr-6">
//           Calendar
//         </h2>
//       </div>

//       {/* Tabs */}
//       <div className="flex justify-around border-b border-gray-300 mt-8 text-lg sm:text-3xl">
//         <span className="pb-1 border-b-2 border-red-500 text-red-600 font-bold cursor-pointer">
//           Calendar
//         </span>
//         <button className="text-gray-500 cursor-pointer hover:text-red-500" onClick={() => navigate('/events')} >Events</button>
//       </div>

//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mt-8 mb-4">
//         <button className="text-4xl text-gray-700" onClick={prevMonth}>
//           {"<"}
//         </button>
//         <h3 className="text-xl sm:text-4xl font-semibold">
//           {monthNames[month]}, {year}
//         </h3>
//         <button className="text-4xl text-gray-700" onClick={nextMonth}>
//           {">"}
//         </button>
//       </div>

//       {/* Weekdays */}
//       <div className="grid grid-cols-7 text-center mt-8 font-semibold bg-indigo-500 text-white py-2 text-2xl rounded-t-md">
//         {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
//           <div key={index}>{day}</div>
//         ))}
//       </div>

//       {/* Dates Grid */}
//       <div className="grid grid-cols-7 text-center bg-indigo-100 text-black py-2 text-sm sm:text-base rounded-b-md">
//         {[...Array(startDay)].map((_, i) => (
//           <div key={"empty" + i} className="py-3"></div>
//         ))}
//         {Array.from({ length: daysInMonth }, (_, i) => {
//           const day = i + 1;
//           return (
//             <div key={day} className="relative py-3">
//               {day}
//               {/* Example event dot */}
//               {day === 19 && month === 5 && year === 2025 && (
//                 <div className="absolute w-2 h-2 bg-red-600 rounded-full bottom-1 left-1/2 transform -translate-x-1/2"></div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Example Event */}
//       {month === 5 && year === 2025 && (
//         <div className="flex items-center gap-4 bg-indigo-100 mt-6 p-4 rounded-md w-full max-w-9xl mx-auto">
//           <div className="bg-pink-200 text-black rounded-lg p-2 w-16 text-center">
//             <div className="text-lg sm:text-xl font-bold">19</div>
//             <div className="text-lg lowercase">jun</div>
//           </div>
//           <div className="text-base sm:text-2xl font-medium">
//             NID (Palkhi Procession)
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Calendar;