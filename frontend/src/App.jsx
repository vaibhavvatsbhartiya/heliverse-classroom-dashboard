import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import TimeTable from './pages/TimeTable';
import Classes from './pages/Classes';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard/*"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <TopNav />
                <Routes>
                  <Route path="/timetable" element={<TimeTable />} />
                  <Route path="/classes" element={<Classes />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
    </>
   
  );
};

export default App;
