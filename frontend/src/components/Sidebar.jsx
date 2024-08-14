import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <ul className="mt-6">
        <li><Link to="/dashboard/timetable" className="block p-4 hover:bg-gray-700">Time-Table</Link></li>
        <li><Link to="/dashboard/classes" className="block p-4 hover:bg-gray-700">Classes</Link></li>
        <li><Link to="/dashboard/profile" className="block p-4 hover:bg-gray-700">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
