import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Classroom Management System</h1>
      <p className="text-lg mb-6">Manage your classrooms, view schedules, and more.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
