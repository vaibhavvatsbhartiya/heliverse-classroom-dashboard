const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');
const auth = require('../middleware/auth');

// Create a new classroom
router.post('/', auth, classroomController.createClassroom);

// Get all classrooms
router.get('/', auth, classroomController.getClassrooms);

// Get a specific classroom by ID
router.get('/:id', auth, classroomController.getClassroomById);

// Update a classroom
router.put('/:id', auth, classroomController.updateClassroom);

// Delete a classroom
router.delete('/:id', auth, classroomController.deleteClassroom);

module.exports = router;
