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
const { protect } = require('../middleware/authMiddleware');

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
router.post('/create', upload.single('image'), protect,createEvent);
router.get('/all', getAllEvents);
router.get('/hosted', protect, getEventsByHost);
router.post('/register', registerForEvent);
router.get('/registered/:email', getRegisteredEvents);

// Add this route BEFORE the put/delete
router.get('/:id', getEventById);

router.put(
  '/:id',
  protect,
  upload.single('image'), // 🔥 REQUIRED
  updateEvent
);

router.delete(
  "/:id",
  protect,
  deleteEvent
);


module.exports = router;
