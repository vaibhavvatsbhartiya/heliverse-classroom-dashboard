const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({
  classroomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true },
  subject: { type: String, required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true }, // Format: HH:mm
  endTime: { type: String, required: true }    // Format: HH:mm
});

module.exports = mongoose.model('Timetable', TimetableSchema);
