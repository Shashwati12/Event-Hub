const Registration = require("../models/Registration");

// Register Team
const registerTeam = async (req, res) => {
  try {
    const { eventId, eventName, teamName, teamMembers, userEmail } = req.body;

    if (!eventId || !eventName || !teamName || !teamMembers || !userEmail) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check for duplicate
    const already = await Registration.findOne({
      eventId,
      userEmail: userEmail.toLowerCase(),
    });

    if (already) {
      return res.status(400).json({ message: "You have already registered for this event." });
    }

    const registration = new Registration({
      eventId,
      eventName,
      teamName,
      teamMembers,
      userEmail: userEmail.toLowerCase(),
    });

    await registration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get User's Events
const getUserRegisteredEvents = async (req, res) => {
  try {
    const { userEmail } = req.query;
    if (!userEmail) return res.status(400).json({ message: "Email is required" });

    const registrations = await Registration.find({
      userEmail: userEmail.toLowerCase(),
    });

    res.json(registrations);
  } catch (err) {
    console.error("Fetching user events failed:", err);
    res.status(500).json({ message: "Failed to fetch events" });
  }
};

// Get Registrations by Event
const getRegistrationsByEventId = async (req, res) => {
  try {
    const { eventId } = req.params;
    const registrations = await Registration.find({ eventId });
    res.status(200).json(registrations);
  } catch (error) {
    console.error("Error fetching registrations by event ID:", error);
    res.status(500).json({ message: "Failed to fetch registrations." });
  }
};

// Export all
module.exports = {
  registerTeam,
  getUserRegisteredEvents,
  getRegistrationsByEventId,
};