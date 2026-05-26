const express = require("express");
const {
	getAllWorkouts,
	getWorkoutById,
	createWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getAllWorkouts);
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);

module.exports = router;
