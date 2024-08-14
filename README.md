# Classroom Dashboard MERN Application

## Overview

This project is a Classroom Dashboard application designed to manage workload in schools or classes. It uses the MERN stack (MongoDB, Express.js, React, Node.js) and follows the MVC (Model-View-Controller) architecture. The application provides role-based access where principals have comprehensive management capabilities, while teachers have limited permissions.

## Features

- **Role-Based Access**:
  - **Principal**: Full CRUD operations on student and teacher profiles, classes, and timetables.
  - **Teacher**: CRUD operations on student profiles and classes.
  
- **Authentication**: Secure login and registration with JWT (JSON Web Tokens).
- **CRUD Operations**: Manage student profiles, teacher profiles, classes, and timetables.

## Backend Overview

The backend is built using Express.js and MongoDB with Mongoose for data modeling. The backend includes:

- **Routes**:
  - `userRoutes`: For user management including registration and login.
  - `classroomRoutes`: For classroom-related operations.
  - `timetableRoutes`: For managing timetables.

- **Dependencies**:
  - `bcryptjs`: For hashing passwords.
  - `cors`: To handle Cross-Origin Resource Sharing.
  - `dotenv`: For environment variable management.
  - `express`: The web framework.
  - `jsonwebtoken`: For generating and verifying JWT tokens.
  - `mongoose`: For MongoDB object modeling.

- **DevDependencies**:
  - `nodemon`: For automatic server restarts during development.

### Backend Package.json

```json
{
  "name": "classroom-backend",
  "version": "1.0.0",
  "description": "This folder contains the all code related to classroom web app. The code is basically divide into the parts containing model, controllers, utilities as per our need. At last this code base follow MVC architecture.",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "author": "Vaibhav Vats",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.5.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
```

## Frontend Overview

The frontend is built using React with Vite for fast development and Tailwind CSS for styling. The frontend includes:

- **Pages**:
  - `TimeTable`: To view and manage timetables.
  - `Classes`: To view and manage classes.
  - `Profile`: To view and edit user profile.
  - `Signup`: For user registration.
  - `Login`: For user login.
  - `LandingPage`: The main landing page of the application.

- **Dependencies**:
  - `axios`: For making HTTP requests.
  - `react`: For building the user interface.
  - `react-dom`: For rendering React components.
  - `react-router-dom`: For routing and navigation.
  - `react-toastify`: For displaying toast notifications.

- **DevDependencies**:
  - `@eslint/js`, `@types/react`, `@types/react-dom`: For linting and type definitions.
  - `@vitejs/plugin-react`: For React support in Vite.
  - `autoprefixer`, `postcss`, `tailwindcss`: For CSS preprocessing and styling.
  - `vite`: The build tool.

### Frontend Package.json

```json
{
  "name": "frontend",
  "private": true,
  "version": "1.0.0",
  "proxy": "",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "react-toastify": "^10.0.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.8.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.8.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.9",
    "vite": "^5.4.0"
  }
}
```

## Setup

### Backend Setup

1. Clone the repository.
2. Navigate to the `classroom-backend` directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file with your environment variables (e.g., MongoDB URI, JWT secret).
5. Run `npm run dev` to start the backend server.

### Frontend Setup

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

## Usage

- Access the application at `http://localhost:5173` for the frontend.
- Access the backend API at `http://localhost:5000`.

