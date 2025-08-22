const express = require("express");
const router = express.Router();
const Complaint = require("../models/complaint");

// POST route for adding attendance
router.post("/",async (req, res) => {
  try {
    const { name, classGrade, email, description } = req.body;
    const newComplaint = new Complaint({ name, classGrade, email, description });
    await newComplaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET: Fetch all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ date: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }

});

module.exports = router;
