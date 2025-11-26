// 📁 src/Pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Welcome, {user?.fullName || "User"} 👋
        </h2>
        <p className="text-gray-600 mb-2">Email: {user?.email}</p>
        <p className="text-gray-600 mb-6">Role: {user?.role}</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
