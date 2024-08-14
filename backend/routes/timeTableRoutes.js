const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/timetableController');
const auth = require('../middleware/auth');

// Create a new timetable entry
router.post('/', auth, timetableController.createTimetable);

// Get all timetables
router.get('/', auth, timetableController.getTimetables);

// Get a timetable by ID
router.get('/:id', auth, timetableController.getTimetableById);

// Update a timetable
router.put('/:id', auth, timetableController.updateTimetable);

// Delete a timetable
router.delete('/:id', auth, timetableController.deleteTimetable);

module.exports = router;
