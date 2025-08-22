import React from "react";

const UsefulInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      {/* Header */}
      <div className="flex items-center mb-6 gap-4">
               

        <h1 className="text-5xl font-bold text-gray-800 ml-140 mt-7">Useful Info</h1>
      </div>

      {/* Card 1: School Detail */}
      <div className="bg-blue-300 rounded-lg shadow-md p-4 mt-20 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">School Detail</h2>
        <p className="text-gray-700">Organization Name</p>
      </div>

      {/* Card 2: Mobile App Contact Details */}
      <div className="bg-blue-200 rounded-lg shadow-md p-4 mt-7 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mobile App Contact Details</h2>
        <p className="text-gray-700">Contact Timing : 10:00AM to 01:00PM</p>
      </div>

      {/* Card 3: School Address */}
      <div className="bg-indigo-200 rounded-lg shadow-md mt-7 p-4 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">School Address</h2>
        <p className="text-gray-700">School Address</p>
      </div>
    </div>
  );
};

export default UsefulInfo;