const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  college: String,
  description: String,
  minTeam: Number,
  maxTeam: Number,
  deadline: String,
  startDate: String,
  endDate: String,
  mode: String,
  prize: String,
  judgingCriteria: String,
  contactEmail: String,
  category: String,
  image: String,
  createdBy: String
});

module.exports = mongoose.model('Event', eventSchema);
