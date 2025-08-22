import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SchoolRes.css'
const SchoolRes = (onLoginSuccess) => {

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic here
    alert(`Logged in as ${username}`);
     if (username && password && org) {
      onLoginSuccess(); // Go to Home
    } else {
      alert('Please fill all fields');
    }

  };
  // const handleContinueClick1 = () => {
  //   navigate("/auth1");
  // }
  return (
    <div className='body'>
    <div className='container' id="container">
      <div className='form-container sign-up'>
        <form action="">
          <h1>create Account</h1>
          {/* <div className='social-icon'>
            <a href='#'className='icon'><i className="fa-brands fa-google-plus-g"></i></a>
            <a href='#'className='icon'><i className="fa-brands fa-facebook-f"></i></a>
            <a href='#'className='icon'><i className="fa-brands fa-github"></i></a>
            <a href='#'className='icon'><i className="fa-brands fa-linkedin-in"></i></a>
          </div> */}
          <span>or use your email for registeration</span>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button id='Sign up' >Sign Up</button>

        </form>

      </div>
      <div className='form-container sign-in'>
        <form action="">
          <h1 >sign in</h1>
          {/* <div className='social-icon'>
            <a href='#'className='icon'><i className="fa-brands fa-google-plus-g"></i></a>
            <a href='#'className='icon'><i className="fa-brands fa-facebook-f"></i></a>
            <a href='#'className='icon'><i className="fa-brands fa-github"></i></a>
            <a href='#'className='icon'><i className="fa-brands fa-linkedin-in"></i></a>
          </div> */}
          <span>or use your email for registeration</span>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button id='Sugn in'>Sign in</button>

          </form>
      </div>
      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1>Welcome  Back Student</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className='hidden ' id='login'>Sign in</button>
          </div>
            <div className='toggle-panel toggle-right'>
            <h1>Welcome   Student</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className='hidden ' id='register'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SchoolRes;
