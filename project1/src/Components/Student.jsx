import React, { useState } from 'react';
//import React from "react";
import './Student.css';
const Student =()=>{
   const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const pass="Arati@2309";

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            setError('Please fill in all  fields');
            return;
        }
        if ( password === pass) {
            setError('login Succesful');
            return;
        }
        else{
            setError('Unsuccessful');
            return;
        }
        // Call API or authentication logic here
        
    };

    return (
        <div className="login-container">
            <h2>Student Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br />
                <label >Enter User Email-id:</label>
                <input type="email" name="" id="" />
                <br />
                <br />
                <label>ENTER STUDENT BIRTH DATE:</label>
                <input type="date" name="" id=""/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
export default Student;