const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema({
  weekRange: { type: String, required: true },
  subject: { type: String, required: true },
  teacher: { type: String, required: true },
  assigned: { type: String },
  submitted: { type: String },
  color: { type: String, enum: ["blue", "gray"], default: "gray" },
  status: { type: String, enum: ["Completed", "Pending"], default: "Pending" },
  message: { type: String, required: true }
});

module.exports = mongoose.model("Homework", homeworkSchema);
