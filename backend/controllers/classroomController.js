const Classroom = require("../models/classroomModel");

// Create a new classroom
const createClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;
  try {
    const newClassroom = new Classroom({ name, startTime, endTime, days });
    await newClassroom.save();
    res.status(201).json(newClassroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all classrooms
const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a classroom by ID
const getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom)
      return res.status(404).json({ message: "Classroom not found" });
    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a classroom
const updateClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;
  try {
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      req.params.id,
      { name, startTime, endTime, days },
      { new: true }
    );
    if (!updatedClassroom)
      return res.status(404).json({ message: "Classroom not found" });
    res.json(updatedClassroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a classroom
const deleteClassroom = async (req, res) => {
  try {
    const deletedClassroom = await Classroom.findByIdAndDelete(req.params.id);
    if (!deletedClassroom)
      return res.status(404).json({ message: "Classroom not found" });
    res.json({ message: "Classroom deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClassrooms,
  getClassroomById,
  updateClassroom,
  deleteClassroom,
  createClassroom
};
