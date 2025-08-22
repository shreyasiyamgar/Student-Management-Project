const express = require("express");
const router = express.Router();

// POST route for adding attendance
router.post("/", (req, res) => {
  console.log(req.body); // See the incoming data in terminal
  res.status(201).json({ message: "Attendance added successfully", data: req.body });
});

module.exports = router;
