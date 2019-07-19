const express = require("express");
const Project = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json("It's on!");
  } catch (error) {
    res.status(500).json({
      error: "Failed to load recipes."
    });
  }
});

module.exports = router;
