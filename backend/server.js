const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB(); // connect with database

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());



// Routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const timetableRoutes = require("./routes/timeTableRoutes");

// user-route
app.use("/api/users", userRoutes);

// auth-route
app.use("/api/auth", authRoutes);

app.use("/api/classrooms", classroomRoutes);

// timetable-route
app.use("/api/timetables", timetableRoutes);



// start the server
app.listen(PORT, () => {
  console.log(`server is started at port: ${PORT}`);
});
