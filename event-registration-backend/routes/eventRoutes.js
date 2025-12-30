const express = require('express');
const router = express.Router();
const multer = require('multer');

const {
  createEvent,
  getAllEvents,
  getEventsByHost,
  registerForEvent,
  getRegisteredEvents,
  updateEvent,
  deleteEvent,
  getEventById, 
} = require('../controllers/eventController');

// Upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post('/create', upload.single('image'), createEvent);
router.get('/all', getAllEvents);
router.get('/hosted/:email', getEventsByHost);
router.post('/register', registerForEvent);
router.get('/registered/:email', getRegisteredEvents);

// Add this route BEFORE the put/delete
router.get('/:id', getEventById);

router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
