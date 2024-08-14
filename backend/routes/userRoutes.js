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
