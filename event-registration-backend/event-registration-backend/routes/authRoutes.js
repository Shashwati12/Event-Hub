const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Ensure correct path to the controller
const router = express.Router();

// Ensure these are functions
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
