const express = require("express");
const { createExercise } = require("../controllers/exerciseController");

const router = express.Router();

router.post("/", createExercise);

module.exports = router;
