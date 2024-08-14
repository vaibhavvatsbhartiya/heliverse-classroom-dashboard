const Timetable = require("../models/Timetable");
const Classroom = require("../models/classroomModel");

// Create a new timetable entry
const createTimetable = async (req, res) => {
  const { classroomId, subject, day, startTime, endTime } = req.body;
  try {
    // Check if classroom exists
    const classroom = await Classroom.findById(classroomId);
    if (!classroom)
      return res.status(404).json({ message: "Classroom not found" });

    // Validate timetable entry
    if (!classroom.days.includes(day))
      return res.status(400).json({ message: "Invalid day for the classroom" });
    if (startTime < classroom.startTime || endTime > classroom.endTime)
      return res
        .status(400)
        .json({ message: "Timetable entry outside classroom hours" });

    const newTimetable = new Timetable({
      classroomId,
      subject,
      day,
      startTime,
      endTime,
    });
    await newTimetable.save();
    res.status(201).json(newTimetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all timetables
const getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find();
    res.json(timetables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a timetable by ID
const getTimetableById = async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    if (!timetable)
      return res.status(404).json({ message: "Timetable not found" });
    res.json(timetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a timetable
const updateTimetable = async (req, res) => {
  const { subject, day, startTime, endTime } = req.body;
  try {
    const updatedTimetable = await Timetable.findByIdAndUpdate(
      req.params.id,
      { subject, day, startTime, endTime },
      { new: true }
    );
    if (!updatedTimetable)
      return res.status(404).json({ message: "Timetable not found" });
    res.json(updatedTimetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a timetable
const deleteTimetable = async (req, res) => {
  try {
    const deletedTimetable = await Timetable.findByIdAndDelete(req.params.id);
    if (!deletedTimetable)
      return res.status(404).json({ message: "Timetable not found" });
    res.json({ message: "Timetable deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTimetable,
  getTimetables,
  getTimetableById,
  updateTimetable,
  deleteTimetable,
};
