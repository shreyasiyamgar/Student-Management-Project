import React, { useState, useEffect } from 'react';

function HomeWork() {
  const [weeks, setWeeks] = useState([]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/homework")
      .then(res => res.json())
      .then(data => {
        // Group by weekRange
        const grouped = data.reduce((acc, hw) => {
          if (!acc[hw.weekRange]) acc[hw.weekRange] = [];
          acc[hw.weekRange].push(hw);
          return acc;
        }, {});

        setWeeks(Object.entries(grouped).map(([range, items]) => ({
          range,
          data: items
        })));
      });
  }, []);

  const currentWeek = weeks[currentWeekIndex] || { range: "", data: [] };

  const handlePrev = () => {
    if (currentWeekIndex > 0) setCurrentWeekIndex(currentWeekIndex - 1);
  };

  const handleNext = () => {
    if (currentWeekIndex < weeks.length - 1) setCurrentWeekIndex(currentWeekIndex + 1);
  };

  return (
    <div className="p-5 bg-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between relative">
         <button className="absolute left-0 text-3xl px-3 cursor-pointer">←</button>
        <h1 className="mx-auto text-center font-bold text-5xl">Home Work</h1>
        
      </header>

      {/* Date Selector */}
      <div className="flex items-center justify-between bg-[rgba(238,205,133,0.626)] p-3 mt-3 rounded-md">
        <div className="flex-1 flex justify-center items-center gap-6">
          <button onClick={handlePrev} className="text-xl font-bold px-3">{'<'}</button>
          <span className="font-bold text-lg">{currentWeek.range}</span>
          <button onClick={handleNext} className="text-xl font-bold px-3">{'>'}</button>
        </div>
       
      </div>

      {/* Cards */}
      {currentWeek.data.map((item, index) => (
        <div
          key={index}
          className={`mt-4 rounded-2xl flex items-stretch overflow-hidden ${
            item.status === 'Completed' ? 'bg-[#b8e3fe]' : 'bg-[#d6d6d6]'
          }`}
        >
          <div className={`w-2 rounded-l-2xl ${
              item.color === 'blue' ? 'bg-[#0074cc]' : 'bg-[#4a4a4a]'
            }`}
          ></div>
          <div className="flex justify-between flex-1 p-4">
            <div className="flex flex-col">
              <strong className="text-lg">{item.subject}</strong>
              <p className="mt-1">👤 {item.teacher}</p>
              <p className="mt-1 font-semibold">Status:- {item.status}</p>
              <p className="mt-2 italic text-[#484848] text-[17px]">
                <strong>Homework :- </strong>{item.message}
              </p>
            </div>
            <div className="text-right text-sm font-medium">
              <p><strong>Assigned on :</strong> {item.assigned}</p>
              <p><strong>  Submitted on :</strong> {item.submitted}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeWork;