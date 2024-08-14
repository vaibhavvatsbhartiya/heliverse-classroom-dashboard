import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, formData); // Removed base URL
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.info('Attention! You are redirected to your dashboard');
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Error logging in:", error);
    }
  };

  const handleSignUp = () => {
    navigate("/signup"); // Redirect to sign-up page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="bg-blue-500 text-white p-2 w-full mb-4">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <button
            onClick={handleSignUp}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
