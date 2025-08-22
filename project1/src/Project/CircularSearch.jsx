import React from 'react';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const data = [
  {
    title: 'PTA Meeting',
    venue: "ClassRoom No.07 'C' building",
    date: '21/06/2025',
    bgColor: 'bg-yellow-100',
    instructions: 'Parents are requested to arrive 10 minutes early and bring their ID cards.'
  },
  {
    title: 'Drawing Competition',
    venue: "Art Room \'B\' building",
    date: '20/06/2025',
    bgColor: 'bg-cyan-100',
    instructions: 'Participants must bring their own drawing materials and be seated by 9:00 AM.'
  },
  {
    title: 'Inauguration',
    venue: "Main Auditorium \'B\' building",
    date: '18/06/2025',
    bgColor: 'bg-purple-100',
    instructions: 'All students must wear the school uniform and reach the venue by 8:30 AM sharp.'
  }
];

function CircularSearch() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full p-5 font-sans bg-white box-border">
      <button className="text-yellow-500 text-4xl sm:text-6xl"onClick={() => navigate('/')}>←</button>
      {/* Header */}
      <header className="flex justify-between items-center">
        
        <h1 className=" text-4xl font-black fontsize-15 ml-150 font-bold cursor-pointer">Circular Search</h1>
        <span className="text-2xl cursor-pointer">🔽</span>
      </header>

      {/* Date Range Centered */}
      <div className="flex items-center justify-between bg-[#d6bebe] p-3 mt-5 rounded-lg">
        {/* Centered Date + Arrows */}
        <div className="flex-1 flex justify-center items-center gap-4">
          <button className="text-lg font-bold">{'<'}</button>
          <span className="font-bold">18 Jun - 25 Jun</span>
          <button className="text-lg font-bold">{'>'}</button>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2">
          <button className="bg-[#d6a860] text-white font-bold px-3 py-1 rounded">W</button>
          <button className="bg-[#d6a860] text-white font-bold px-3 py-1 rounded">M</button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 mt-6">
        {data.map((item, index) => (
          <div className={`flex justify-between p-4 rounded-2xl shadow-md ${item.bgColor}`} key={index}>
            {/* Left Side */}
            <div>
              <h2 className="font-bold text-lg mb-1">{item.title}</h2>
              <div className="flex items-center mb-2">
                <FaUserAlt className="mr-2" />
                <span>Mariya</span>
              </div>
              <p><strong>Venue :- </strong>{item.venue}</p>
              <p className="mt-1 text-sm italic text-black"><strong>Note:</strong> {item.instructions}</p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 font-bold">
              <FaCalendarAlt />
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircularSearch;