import React from "react";
import { useNavigate } from 'react-router-dom';
const FeeReceipt = () => {
    const navigate = useNavigate();
  const fees = [
    { id: "01", description: "Fee Description", amount: 0 },
    { id: "02", description: "Fee Description", amount: 0 },
    { id: "03", description: "Fee Description", amount: 0 },
    { id: "04", description: "Fee Description", amount: 0 },
    { id: "05", description: "Fee Description", amount: 0 },
    { id: "06", description: "Fee Description", amount: 0 },
    { id: "07", description: "Fee Description", amount: 0 },
  ];

  const total = fees.reduce((acc, fee) => acc + fee.amount, 0);

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Back Button - fixed at top-left */}
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
        onClick={() => navigate('/fee')}
      >
        &lt; Back to Fee Page
      </button>

      {/* Receipt container */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg border p-8 font-sans mt-12">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-blue-200 flex items-center justify-center rounded-full">
              <span className="text-lg font-bold text-blue-800">LOGO</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-700">SCHOOL NAME</h1>
              <p className="text-gray-500 text-sm">TAGLINE WILL GO HERE</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Invoice Date: 00-00-20XX</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-teal-700 mt-6">
          FEE RECEIPT
        </h2>

        {/* Student Info */}
        <div className="mt-6 text-sm space-y-2">
          <div className="flex gap-2">
            <span className="font-bold w-28">Name:</span>
            <span className="flex-1 border-b border-gray-400"></span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold w-28">Class:</span>
            <span className="flex-1 border-b border-gray-400"></span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold w-28">Student ID:</span>
            <span className="flex-1 border-b border-gray-400"></span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold w-28">Email Address:</span>
            <span className="flex-1 border-b border-gray-400"></span>
          </div>
        </div>

        {/* Fee table */}
        <table className="w-full mt-6 border border-gray-400 text-sm">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="p-2 border border-gray-400 w-12">NO.</th>
              <th className="p-2 border border-gray-400">FEE DESCRIPTION</th>
              <th className="p-2 border border-gray-400 w-28 text-right">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id}>
                <td className="p-2 border border-gray-400 text-center">
                  {fee.id}
                </td>
                <td className="p-2 border border-gray-400">
                  {fee.description}
                </td>
                <td className="p-2 border border-gray-400 text-right">
                  ${fee.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="bg-teal-100 font-bold">
              <td colSpan="2" className="p-2 border border-gray-400 text-right">
                Total:
              </td>
              <td className="p-2 border border-gray-400 text-right">
                ${total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Payment info */}
        <div className="mt-6 text-sm">
          <p className="font-bold">Payment Method:</p>
          <p>Account No: 123456/7890</p>
          <p>Account Name: Mr. Lorem Ipsum</p>
          <p>Bank Name: XYZ</p>
        </div>

        {/* Thank You message */}
        <div className="mt-8 text-center text-lg font-semibold text-teal-700">
          Thank You for Your Payment!
        </div>
      </div>
    </div>
  );
};

export default FeeReceipt;