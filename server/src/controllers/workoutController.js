// const { workouts } = require("../data/store");
const pool = require("../db");

async function getAllWorkouts(req, res) {
	try {
		const result = await pool.query(
			"SELECT id, name, workout_date, notes, created_at FROM workouts ORDER BY workout_date DESC, id DESC",
		);
		return res.status(200).json(result.rows);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to fetch workouts" });
	}
}

async function getWorkoutById(req, res) {
	const workoutId = Number(req.params.id);
	// const workout = workouts.find((item) => item.id === workoutId);

	try {
		const workoutResult = await pool.query(
			`SELECT id, name, workout_date, notes, created_at FROM workouts WHERE id = $1`,
			[workoutId],
		);

		if (workoutResult.rows.length === 0) {
			return res.status(404).json({ message: "Workout not found" });
		}

		return res.status(200).json(workoutResult.rows[0]);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to fetch workout" });
	}
}

async function createWorkout(req, res) {
	const { name, date, notes } = req.body;

	if (!name || !date) {
		return res.status(400).json({ message: "Name and date are required" });
	}

	try {
		const result = await pool.query(
			`
            INSERT INTO workouts (name, workout_date, notes)
            VALUES ($1, $2, $3)
            RETURNING id, name, workout_date, notes, created_at
            `,
			[name, date, notes || ""],
		);

		return res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to create workout" });
	}
}

module.exports = {
	getAllWorkouts,
	getWorkoutById,
	createWorkout,
};
