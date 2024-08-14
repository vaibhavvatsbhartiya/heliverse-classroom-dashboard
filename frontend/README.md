## Frontend Overview

The frontend of our Classroom Dashboard application is built using React, with Vite as the build tool for fast development and Tailwind CSS for modern, responsive styling. This section will provide an in-depth look at the structure and functionality of the frontend.

### Key Technologies

- **React**: A JavaScript library for building user interfaces, used here to create reusable components and manage the application's state.
- **Vite**: A fast build tool that provides an optimized development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling components and creating responsive designs.
- **react-router-dom**: A library for handling routing and navigation within the React application.

### Project Structure

The frontend code is organized into components and pages, which are used to build the user interface and handle various application functionalities.

#### Components

Components are reusable pieces of the UI that can be used across different pages. In your application, you have:

- **Sidebar**: A component that provides a navigation menu for different sections of the dashboard (e.g., TimeTable, Classes, Profile). It is typically displayed on the side of the dashboard layout.
- **TopNav**: A component that displays the top navigation bar, often containing the application name, user profile, or other quick access elements.

#### Pages

Pages represent different views or sections of the application. Each page is a React component that may use various components to build the complete view. Key pages in your application include:

- **LandingPage**: The initial page users see when they visit the application. It provides an introduction and navigation to login or signup.
- **Login**: The page where users enter their credentials to access their accounts.
- **Signup**: The page where new users can create an account.
- **Profile**: A page where users can view and edit their profile information.
- **TimeTable**: A page for managing and viewing timetables.
- **Classes**: A page for managing and viewing classes.

### Routing with `react-router-dom`

`react-router-dom` is used to handle routing within the React application, allowing users to navigate between different pages. Here's how it's integrated into your application:

#### App Component

In the `App` component, routes are defined to map URLs to specific components. This is where the routing logic is set up:

```jsx
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

const App = () => {
  return (
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
  );
};

export default App;
```

### Routing Breakdown

- **Root Route (`/`)**: Renders the `LandingPage` component.
- **Login Route (`/login`)**: Renders the `Login` page where users can sign in.
- **Signup Route (`/signup`)**: Renders the `Signup` page for new user registration.
- **Dashboard Route (`/dashboard/*`)**: This route is protected and displays a layout with a sidebar and top navigation. Within this layout, nested routes handle different sections of the dashboard:
  - **TimeTable (`/dashboard/timetable`)**: Renders the `TimeTable` component.
  - **Classes (`/dashboard/classes`)**: Renders the `Classes` component.
  - **Profile (`/dashboard/profile`)**: Renders the `Profile` component.

### Using React Router

- **`BrowserRouter`**: Wraps the entire application to enable routing capabilities.
- **`Routes`**: Defines a set of routes that map URL paths to components.
- **`Route`**: Associates a specific URL path with a component to be rendered.

### Component Integration

- **Sidebar and TopNav**: These components are included in the dashboard layout and are shared across different pages under `/dashboard`. This ensures consistent navigation and layout throughout the dashboard section.
- **Page Components**: Each page component (e.g., `TimeTable`, `Classes`, `Profile`) is rendered based on the current URL, providing specific functionalities and views.

### Example of a Page Component

Here’s a basic example of how a page component like `TimeTable` might be structured:

```jsx
import React from 'react';

const TimeTable = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">TimeTable</h2>
      {/* TimeTable content goes here */}
    </div>
  );
};

export default TimeTable;
```

### Summary

The frontend of your Classroom Dashboard application is designed to provide a clear, user-friendly interface with efficient routing and navigation using `react-router-dom`. Components and pages are structured to support role-based access and dynamic content management, with styling provided by Tailwind CSS to ensure a modern and responsive design.
