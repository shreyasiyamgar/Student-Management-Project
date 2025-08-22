const express = require("express");
const router = express.Router();
const Homework = require("../models/Homework");

// Get all homework
router.get("/", async (req, res) => {
  try {
    const homework = await Homework.find();
    res.json(homework);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add homework
router.post("/", async (req, res) => {
  try {
    const hw = new Homework(req.body);
    const saved = await hw.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete homework
router.delete("/:id", async (req, res) => {
  try {
    await Homework.findByIdAndDelete(req.params.id);
    res.json({ message: "Homework deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
