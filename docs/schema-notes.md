# Schema Notes

## Core Entities

### Workout

Represents one workout session. Possible fields:

- id
- name
- date
- notes

### Exercise Definition

Represents a reusable exercise like Bench Press or Squat. Possible fields:

- id
- name
- muscle_group

### Workout Exercise

Links a workout to an exercise. Possible fields:

- id
- workout_id
- exercise_id
- order_index

### Set

Represents one logged set for a workout exercise. Possible fields:

- id
- workout_exercise_id
- reps
- weight

## Relationships

- One workout has many workout exercises
- One exercise definition can appear in many workout exercises
- One workout exercise has many sets
