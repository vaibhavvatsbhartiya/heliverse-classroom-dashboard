import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    phone_num: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    try {
      const res = await axios.post("/api/auth/register", formData); // Use the Axios instance
      // Use the Axios instance
      toast.info('Attention! You are redirected to login');
      toast.success("SignUp successful!");

      navigate("/login");
      
    } catch (error) {
      if (error.response) {
        toast.error("Server responded with an error: check console", error.response.data);
      } else if (error.request) {
        toast.error(
          "Request was made but no response received:check console",
          error.request
        );
      } else {
        toast.error("Error setting up the request: check console", error.message);
      }
      toast.warn("Error registering. Please try again.");
    }
  };

  const handleLogin = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="role"
            name="role"
            placeholder="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="phone_num"
            name="phone_num"
            placeholder="phone_num"
            value={formData.phone_num}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full mb-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <button
            onClick={handleLogin}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
