// const { exercises } = require("../data/store");
const pool = require("../db");

async function createExercise(req, res) {
	const { name, muscleGroup } = req.body;

	if (!name) {
		return res.status(400).json({ message: "Exercise name is required" });
	}

	try {
		const result = await pool.query(
			`
            INSERT INTO exercise_definitions (name, muscle_group)
            VALUES ($1, $2)
            RETURNING id, name, muscle_group, created_at
            `,
			[name, muscleGroup || ""],
		);

		return res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error(error);

		if (error.code === "23505") {
			return res.status(409).json({ message: "Exercise already exists" });
		}

		return res.status(500).json({ message: "Failed to create exercise" });
	}
}

module.exports = {
	createExercise,
};
