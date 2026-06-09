const API_BASE_URL = "http://localhost:3001/api";

export async function getWorkouts() {
	const response = await fetch(`${API_BASE_URL}/workouts`);

	if (!response.ok) {
		throw new Error("Failed to load workouts");
	}

	return response.json();
}

export async function createWorkout(workoutData) {
	const response = await fetch(`${API_BASE_URL}/workouts`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(workoutData),
	});

	if (!response.ok) {
		throw new Error("Failed to create workout");
	}

	return response.json();
}

export async function createExercise(exerciseData) {
	const response = await fetch(`${API_BASE_URL}/exercuses`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(exerciseData),
	});

	if (!response.ok) {
		throw new Error("Failed to create exercise");
	}

	return response.json();
}
