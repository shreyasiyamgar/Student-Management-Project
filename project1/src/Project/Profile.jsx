import React from "react";
import { useNavigate } from "react-router-dom";
import usersData from "./usersData";

const Profile = () => {
  const navigate = useNavigate();
 const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const user = usersData.find(u => u.username === loggedInUser);
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>User not found!</p>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-800 font-sans">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-5xl font-bold ml-150">My Profile</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between mb-6">
        <div className="w-40 h-40 rounded-full bg-yellow-300 flex items-center justify-center text-2xl font-bold">
          <img
            src={user.profileImg}
            alt=""
            className="w-40 h-40 rounded-full shadow"
          />
        </div>

        <div className="text-center sm:text-left mt-4 sm:mt-0 sm:ml-4 mr-200">
          <p className="text-4xl font-semibold">{user.name}</p>
          <p className="text-gray-600 text-2xl">ID NO: {user.id}</p>
        </div>

        
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="text-3xl font-bold mb-2 ml-5">Organization Info</h3>
        <ul className="space-y-1 text-2xl ml-5">
          <li>🏫 {user.school}</li>
          <li>📅 {user.year}</li>
          <li>🏷 {user.class}</li>
          <li># {user.roll}</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="text-3xl font-bold mb-2 ml-5">Personal Info</h3>
        <ul className="space-y-1 text-2xl ml-5">
          <li>👥 {user.gender}</li>
          <li>🎂 {user.dob}</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="text-3xl font-bold mb-2 ml-5">Contact Info</h3>
        <ul className="space-y-1 text-2xl ml-5">
          <li>📍 {user.address}</li>
          <li>📞 {user.phone}</li>
          <li>✉ {user.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;