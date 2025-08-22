import React from "react";
import { useNavigate } from 'react-router-dom';
const FeeStructureTable = () => {
  const navigate = useNavigate();
  const grades = [
    "Nursery, Jr.KG & Sr.KG",
    "I & II",
    "III & IV",
    "V & VI",
    "VII & VIII",
    "IX & X",
  ];

  const feeData = {
    "Tuition Fee": ["74,915", "75,099", "77,856", "80,154", "83,280", "1,04,559"],
    "Annual Fee": ["16,546", "16,683", "19,027", "24,451", "30,977", "25,600"],
    "Terms Fee": ["18,384", "18,522", "21,371", "26,432", "35,619", "34,470"],
    "Meal Charges": ["20,705", "32,196", "34,496", "39,063", "47,124", "51,721"],
    "For Annually": [
      "1,30,550",
      "1,42,500",
      "1,52,750",
      "1,70,100",
      "1,97,000",
      "2,16,350",
    ],
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handlePayNowClick = () => {
    
  };

  
  return (
    <div className="p-4 relative">
      {/* Back Button Top Left */}
      <br />
      <div className="mb-4">
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg rounded shadow"
        >
          &lt; back to Fee page
        </button>
      </div> <br /><br />

      {/* Fee Table */}
      <table className="w-full border-collapse border border-gray-400 text-center text-lg">
        <thead>
          {/* Title Row */}
          <tr className="bg-gray-200 h-20">
            <th
              colSpan={grades.length + 1}
              className="border border-gray-400 font-bold py-4 bg-gray-300 text-4xl"
            >
              Fee Structure for F.Y 2025-26
            </th>
          </tr>

          {/* Grades Row */}
          <tr className="bg-gray-100 h-16">
            <th className="border border-gray-400 py-4 px-4 text-xl">
              Fee Type
            </th>
            {grades.map((grade, index) => (
              <th
                key={index}
                className="border border-gray-400 py-4 px-4 text-lg"
              >
                {grade}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Object.entries(feeData).map(([type, values], rowIndex) => (
            <tr
              key={rowIndex}
              className={
                type === "For Annually"
                  ? "bg-sky-200 font-bold h-16"
                  : "hover:bg-gray-50 h-16"
              }
            >
              <td className="border border-gray-400 py-5 px-4 font-bold text-lg">
                {type}
              </td>
              {values.map((val, colIndex) => (
                <td key={colIndex} className="border border-gray-400 py-4 px-4">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
<br />
      {/* Pay Now Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/feeson')}
          className="px-12 py-3 bg-blue-400 hover:bg-blue-500 text-white text-lg rounded shadow"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default FeeStructureTable;