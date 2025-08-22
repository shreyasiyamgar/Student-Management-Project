import React from "react";
import { useNavigate } from "react-router-dom"; 

const events = [
  {
    month: "June,2025",
    entries: [
      { day: "19", shortMonth: "jun", name: "NID (Palkhi Procession)" }
    ]
  },
  {
    month: "August,2025",
    entries: [
      { day: "27", shortMonth: "aug", name: "Ganesh Chaturthi" }
    ]
  },
  {
    month: "September,2025",
    entries: [
      { day: "5", shortMonth: "sep", name: "Eid-e-Milad" },
      { day: "6", shortMonth: "sep", name: "Anant Chaturdashi" }
    ]
  },
  {
    month: "October,2025",
    entries: [
      { day: "12", shortMonth: "Oct", name: "Mahatma Gandhi Jayanti" },
      { day: "17 to 1", shortMonth: "Oct-Nov", name: "Diwali Vacations" }
    ]
  },
  {
    month: "November,2025",
    entries: [
      { day: "5", shortMonth: "Nov", name: "Guru Nanak Jayanti" }
    ]
  },
  {
    month: "December,2025",
    entries: [
      { day: "23 to 2", shortMonth: "Dec to Jan", name: "Christmas Vacations" }
    ]
  },
  {
    month: "February,2025",
    entries: [
      { day: "19", shortMonth: "Feb", name: "Shivaji Maharaj Jayanti" }
    ]
  },
  {
    month: "March,2025",
    entries: [
      { day: "3", shortMonth: "Mar", name: "Holi" },
      { day: "19", shortMonth: "Mar", name: "Gudi Padwa/Ramzan Eid" },
      { day: "26", shortMonth: "Mar", name: "Ramnavami" },
      { day: "31", shortMonth: "Mar", name: "Mahavir Jayanti" }
    ]
  },
  {
    month: "April,2025",
    entries: [
      { day: "3", shortMonth: "Apr", name: "Good Friday" },
      { day: "14", shortMonth: "Apr", name: "Dr.Babasaheb Ambedkar Jayanti" }
    ]
  },
  {
    month: "May,2025",
    entries: [
      { day: "2 to 13", shortMonth: "May to Jun", name: "Summer Vacations" }
    ]
  }
];

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white-100 p-4 sm:p-6 md:p-10 font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between flex-wrap mb-4">
        <button className="text-yellow-500 text-6xl" onClick={() => navigate('/')}>←</button>
        <h2 className="text-2xl sm:text-5xl font-bold text-center flex-grow">
          Calendar
        </h2>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-around border-b-2 border-gray-300 mb-4 text-lg sm:text-3xl flex-wrap">
                <button className="text-gray-500 cursor-pointer hover:text-red-500" onClick={() => navigate('/calendar')} >Calender</button>

        <span className="py-2 font-semibold text-red-500 border-b-2 border-red-500 cursor-pointer">
          Events
        </span>
      </div>

      {/* Filter Section */}
      <div className="mb-6">
        <select className="w-full p-2 border border-black rounded-md">
          <option>All</option>
        </select>
      </div>

      {/* Events List */}
      {events.map((monthEvent, idx) => (
        <div key={idx} className="bg-indigo-300 p-4 sm:p-5 mb-6 rounded-md">
          <h3 className="mb-3 text-lg sm:text-xl font-bold">{monthEvent.month}</h3>
          {monthEvent.entries.map((event, i) => (
            <div
              key={i}
              className="bg-gray-300 flex flex-col sm:flex-row sm:items-center p-3 rounded-lg mb-3 gap-3 shadow"
            >
              <div className="bg-gray-100 rounded-lg text-center px-3 py-2 w-full sm:w-20 flex-shrink-0 border">
                <div className="text-lg font-bold">{event.day}</div>
                <div className="text-xs text-white-600 uppercase">{event.shortMonth}</div>
              </div>
              <div className="text-base sm:text-lg font-medium">{event.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Events;