import React from "react";
import a from "./OIP.jpg";

const students = Array.from({ length: 25 }, (_, index) => ({
  name: `Student ${index + 1}`,
  roll: index + 1,
  color: getColor(index),
}));

function getColor(index) {
  const colors = [
    "#dcddfbff", "#d0d9f6ff", "#bdc3f6ff", "#bbd7f1ff", "#d8cffcff",
    "#b5d5f3ff", "#e5ddf3ff", "#c9d1fcff", "#e3dcf7ff", "#b4cdf5ff",
  ];
  return colors[index % colors.length];
}

const MyClass = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
       
        <h2 className="text-5xl font-bold ml-150">My Class</h2>
      </div>

      {/* Student Cards in Vertical Column */}
      <div className="flex flex-col gap-4">
        {students.map((student, i) => (
          <div
            key={i}
            className="flex items-center p-4 rounded-lg shadow-md"
            style={{ backgroundColor: student.color }}
          >
            <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full border">
              <img src={a} alt="Student" className="w-full h-full object-cover" />
            </div>
            <div className="ml-4 text-2xl sm:text-base">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Roll no:</strong> {student.roll}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Search Icon */}
      <div className="fixed bottom-4 right-4 bg-pink-300 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md text-xl cursor-pointer">
        🔍
      </div>
    </div>
  );
};

export default MyClass;