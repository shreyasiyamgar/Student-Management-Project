import React, { useState } from 'react';

function RegistrationPage({ onContinue }) {
  const [regNo, setRegNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(regNo.trim()===''){
      alert("please Enter Ragister Number")
    }
    if (regNo.trim() === "1212") {
      setError('');
      onContinue(regNo);
    } else {
      setError('Wrong register Number');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">School Name</h2> */}

      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Registration No.
          </label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter Registration No"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4">
          Don’t have Registration Number?
          <br />
          Please contact your school administration for Registration number and username/password.
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;
