// SchoolLoginPage.js
import  { useState } from 'react';
import React from 'react';
import './SchoolLoginPage.css'; // Assuming you'll add some CSS for styling
import { useNavigate } from 'react-router-dom';
function SchoolLoginPage() {
  const navigate = useNavigate();
  const [inputValue,setInputValue]=useState('')
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleContinueClick = () => {
    // Here you would handle the logic after the "Continue" button is clicked.
    // This could involve:
    // - Validating the input (e.g., checking if it's a valid school name or ID)
    // - Navigating to another page (e.g., using React Router)
    // - Sending data to a backend server
    console.log('Continue button clicked! Input value:', inputValue);
 navigate("/auth")
    // Example: if (inputValue === "MySchool") { navigate('/dashboard'); }
  };
  
  return (
    <div className="school-login-container">
      
      <div className="login-box">
        <h1>School Name</h1>
        <h6>Register No.</h6>
        <input
          type="text"
          placeholder="Enter your school ID or name"
          value={inputValue}
          onChange={handleInputChange}
          className="school-input"
        />
        <button onClick={handleContinueClick} className="continue-button" >
         Continue
        </button>
        <p></p>
      </div>
    </div>
  );
}

export default SchoolLoginPage;