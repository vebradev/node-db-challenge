const express = require("express");
const Projects = require("./projects-model");

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

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.getProject(req.params.id);
    const actions = await Projects.getActions(req.params.id);
    res.json({
      "id": project[0].id,
      "name": project[0].name,
      "description": project[0].description,
      "completed": project[0].completed,
      "actions" : actions
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to load project and it's actions."
    });
  }
});

module.exports = router;
