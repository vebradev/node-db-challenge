const express = require("express");
const Actions = require("./actions-model");

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

router.post("/:id", async (req, res) => {
  try {
    const action = await Actions.addAction(req.body, req.params.id);
    res.json(action)
  } catch (error) {
    res.status(500).json({
      error: "Failed to add action."
    });
  }
})

module.exports = router;
