const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  status: { type: String, enum: ["present", "absent"], required: true }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
