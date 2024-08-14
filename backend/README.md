### Backend Overview

Our backend is built using **Express.js**, a web application framework for Node.js, and follows the MVC (Model-View-Controller) architecture. The backend handles database connections, routes, and middleware to process requests and responses.

### Project Structure

The backend project is organized into different folders and files, each serving a specific purpose:

1. **`server.js`**: The entry point of the application, where the server is set up and started.
2. **`config/db.js`**: Contains the code for connecting to the MongoDB database.
3. **`routes/`**: Contains route definitions for different parts of the application.
4. **`controllers/`**: Contains the logic for handling requests and interacting with the database.
5. **`models/`**: Defines the data schemas and models for MongoDB.
6. **`middleware/`**: Includes middleware functions like authentication.

### `server.js` Breakdown

Here’s a detailed explanation of the `server.js` file:

```javascript
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from the frontend server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json()); // Parse JSON requests

// Routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const timetableRoutes = require("./routes/timeTableRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/timetables", timetableRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is started at port: ${PORT}`);
});
```

### Key Sections

1. **Environment Configuration**:
   - `dotenv.config()` loads environment variables from a `.env` file, making it easier to manage sensitive information like database credentials.

2. **Database Connection**:
   - `connectDB()` is a custom function to establish a connection with MongoDB. It uses Mongoose to interact with the database.

3. **Middleware Setup**:
   - `cors()` is used to handle Cross-Origin Resource Sharing, allowing your backend to accept requests from the frontend running on a different port.
   - `express.json()` parses incoming JSON requests, making it available in `req.body`.

4. **Routes**:
   - Different route files are imported and used to handle requests for various endpoints. This modular approach keeps the code organized.

5. **Server Start**:
   - `app.listen(PORT, () => { ... })` starts the server on the specified port and logs a message to indicate that the server is running.

### Routes and Middleware

Here’s a brief overview of the routes and how they are structured:

#### Routes

- **User Routes (`userRoutes`)**:
  - Handle operations related to user profiles. Example routes include `/api/users/register` for registration and `/api/users/me` for fetching or updating the current user's profile.

- **Authentication Routes (`authRoutes`)**:
  - Handle user authentication, such as login and token-based authentication.

- **Classroom Routes (`classroomRoutes`)**:
  - Manage operations related to classrooms. This could include CRUD operations for creating, reading, updating, and deleting classroom information.

- **Timetable Routes (`timetableRoutes`)**:
  - Manage operations related to timetables, allowing users to create, view, update, and delete timetable entries.

#### Example Route File (`userRoutes`)

Here’s how the `userRoutes` file might look:

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get the current user (requires authentication)
router.get('/me', auth, userController.getCurrentUser);

// Update user details (requires authentication)
router.put('/me', auth, userController.updateUser);

// Delete a user (requires authentication)
router.delete('/me', auth, userController.deleteUser);

module.exports = router;
```

### Controllers and Models

- **Controllers**:
  - Handle the business logic of each route. For example, `userController` manages user-related operations, interacting with the database through models.

- **Models**:
  - Define the schema for MongoDB collections. For instance, a `User` model might define fields like name, email, and password.

### Authentication

- **Middleware**:
  - Middleware functions like `auth` are used to protect routes. They check if the user is authenticated before allowing access to certain endpoints.

### Summary

The backend of your Classroom Dashboard application handles data management, authentication, and routing. It’s structured to separate concerns into models, controllers, and routes, following the MVC architecture. Middleware functions provide additional functionality like authentication and request parsing, while the main `server.js` file sets up the application, connects to the database, and starts the server.
