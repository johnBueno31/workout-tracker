const { exercises } = require("../data/store");

function createExercise(req, res) {
	const { name, muscleGroup } = req.body;

	if (!name) {
		return res.status(400).json({ message: "Exercise name is required" });
	}

	const newExercise = {
		id: exercises.length + 1,
		name,
		muscleGroup: muscleGroup || "",
	};

	exercises.push(newExercise);

	return res.status(201).json(newExercise);
}

module.exports = {
	createExercise,
};
