DROP TABLE IF EXISTS sets, workout_exercises, exercise_definitions, workouts CASCADE;

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    workout_date DATE NOT NULL,
    notes TEXT DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE exercise_definitions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    muscle_group VARCHAR(100) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workout_exercises (
    id SERIAL PRIMARY KEY,
    workout_id INTEGER NOT NULL REFERENCES workouts(id) ON DELETE CASCADE,
    exercise_id INTEGER NOT NULL REFERENCES exercise_definitions(id) ON DELETE RESTRICT,
    order_index INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE sets (
    id SERIAL PRIMARY KEY,
    workout_exercise_id INTEGER NOT NULL REFERENCES workout_exercises(id) ON DELETE CASCADE,
    reps INTEGER NOT NULL CHECK (reps >= 0),
    weight NUMERIC(6,2) NOT NULL DEFAULT 0 CHECK (weight >= 0)
);