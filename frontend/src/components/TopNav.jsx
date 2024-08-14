import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Classroom Dashboard</div>
      <div>
        <Link to="/dashboard/profile" className="hover:underline mx-2">Profile</Link>
        {/* Example Logout Button */}
        {/* <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default TopNav;
