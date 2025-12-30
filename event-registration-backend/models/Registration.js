
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  eventName: String,
  teamName: String,
  teamMembers: [
    {
      name: String,
      email: String,
      phone: String,
    },
  ],
  userEmail: {
    type: String,
    required: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
