import React, { useState } from "react";
import a from "./img.jpg";

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(username));
onLoginSuccess(username);
        
      } else {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-100">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">School Name</h1>
        <p className="text-lg text-2xl text-gray-700 mb-6">
          "A Building With Four Walls And Tomorrow Inside"
        </p>
        <img src={a} alt="Graduation Cap" className="w-28 h-28 object-contain" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center p-9">
        <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl pt-16 pb-8 px-8">
          {/* Top Curve */}
          <div className="absolute top-0 left-0 w-full h-24 bg-blue-600 rounded-b-[100%] z-0"></div>

          {/* Avatar */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt="Avatar"
              className="w-16 h-16 rounded-full border-4 border-white bg-white"
            />
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4 z-20 relative">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Log In
            </button>

            {message && (
              <p className="text-center text-red-600 mt-4 font-semibold">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;