const { workouts } = require("../data/store");

function getAllWorkouts(req, res) {
	res.status(200).json(workouts);
}

function getWorkoutById(req, res) {
	const workoutId = Number(req.params.id);
	const workout = workouts.find((item) => item.id === workoutId);

	if (!workout) {
		return res.status(404).json({ message: "Workout not found" });
	}

	return res.status(200).json(workout);
}

function createWorkout(req, res) {
	const { name, date, notes } = req.body;

	if (!name || !date) {
		return res.status(400).json({ message: "Name and date are required" });
	}

	const newWorkout = {
		id: workouts.length + 1,
		name,
		date,
		notes: notes || "",
	};

	workouts.push(newWorkout);

	return res.status(201).json(newWorkout);
}

module.exports = {
	getAllWorkouts,
	getWorkoutById,
	createWorkout,
};
