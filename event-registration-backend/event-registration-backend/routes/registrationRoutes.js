const express = require("express");
const router = express.Router();

const {
  registerTeam,
  getUserRegisteredEvents,
  getRegistrationsByEventId
} = require("../controllers/registrationController");


router.post("/", registerTeam);
router.get("/user-events", getUserRegisteredEvents);
router.get("/event/:eventId", getRegistrationsByEventId);

module.exports = router;