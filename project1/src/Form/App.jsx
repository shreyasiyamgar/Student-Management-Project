import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AdminPage from './AdminPage';
import StudentPage from './StudentPage';
import Login from './Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/student" element={<StudentPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;