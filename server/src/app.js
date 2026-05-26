// builds and configures the Express app
// middleware and route registration live here

const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const exerciseRoutes = require("./routes/exercisesRoutes");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/exercises", exerciseRoutes);

module.exports = app;
