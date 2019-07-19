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
    if (actions[0].id) {
      res.json({
        id: project[0].id,
        name: project[0].name,
        description: project[0].description,
        completed: project[0].completed,
        actions: actions
      });
    } else {
      res.json({
        id: project[0].id,
        name: project[0].name,
        description: project[0].description,
        completed: project[0].completed,
        actions: "No actions yet. Add some!"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to load project and it's actions."
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.json(project);
  } catch (error) {
    res.status(500).json({
      error: "Failed to add new project."
    });
  }
});

module.exports = router;
