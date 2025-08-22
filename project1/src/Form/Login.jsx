import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userType === 'admin') {
            navigate('/admin');
        } else if (userType === 'student') {
            navigate('/student');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="radio" value="admin" checked={userType === 'admin'} onChange={(event) => setUserType(event.target.value)} />
                    Admin
                </label>
                <br />
                <label>
                    <input type="radio" value="student" checked={userType === 'student'} onChange={(event) => setUserType(event.target.value)} />
                    Student
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;