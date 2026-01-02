const Event = require('../models/Event');
const path = require('path');
const Registration = require('../models/Registration');


exports.createEvent = async (req, res) => {
  try {
    const {
      eventName, college, description, minTeam, maxTeam,
      deadline, startDate, endDate, mode, prize,
      judgingCriteria, contactEmail, category, createdBy
    } = req.body;

    const image = req.file ? req.file.path : "";

    const newEvent = new Event({
      eventName, college, description, minTeam, maxTeam,
      deadline, startDate, endDate, mode, prize,
      judgingCriteria, contactEmail, category, createdBy,
      image
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch events" });
  }
};

// Register a user for an event
exports.registerForEvent = async (req, res) => {
    const { userEmail, eventId } = req.body;
  
    try {
      const existing = await Registration.findOne({ userEmail, eventId });
      if (existing) {
        return res.status(400).json({ message: "Already registered" });
      }
  
      const reg = new Registration({ userEmail, eventId });
      await reg.save();
      res.status(201).json({ message: "Registered successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // Get events registered by a user
  exports.getRegisteredEvents = async (req, res) => {
    const { email } = req.params;
  
    try {
      const regs = await Registration.find({ userEmail: email }).populate('eventId');
      const events = regs.map((reg) => reg.eventId);
      res.json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Could not fetch registrations" });
    }
  };
  
  // Get events hosted by admin
  exports.getEventsByHost = async (req, res) => {
    const { email } = req.params;
    try {
      const events = await Event.find({ createdBy: email }).sort({ createdAt: -1 });
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch hosted events" });
    }
  };
  

  // Update an event by ID
exports.updateEvent = async (req, res) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updatedEvent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update event" });
    }
  };
  
  // Delete an event by ID
  exports.deleteEvent = async (req, res) => {
    try {
      await Event.findByIdAndDelete(req.params.id);
      res.json({ message: "Event deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete event" });
    }
  };


  // Get event by ID
exports.getEventById = async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ message: "Event not found" });
      res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch event" });
    }
  };
  
  