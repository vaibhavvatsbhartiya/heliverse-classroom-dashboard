import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();


  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found. Please log in.');
        return;
      }
  
      const response = await axios.get('http://localhost:5000/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ name: user.name, email: user.email });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:5000/api/users/me',
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setUser(response.data);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete('http://localhost:5000/api/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Profile deleted successfully!');
        localStorage.removeItem('token');
        navigate('/signup'); // Redirect to signup after deletion
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Profile</h2>
      <div className="mt-4">
        {isEditing ? (
          <>
            <p>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 mb-2 w-full"
              />
            </p>
            <p>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 mb-2 w-full"
              />
            </p>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white p-2 mb-4 mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white p-2 mb-4"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white p-2 mt-4"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white p-2 mt-4"
      >
        Delete Profile
      </button>
    </div>
  );
};

export default Profile;
