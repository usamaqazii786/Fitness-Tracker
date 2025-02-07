/*
  # Initial Schema Setup

  1. New Tables
    - users_metadata
      - id (references auth.users)
      - height
      - weight
      - goals
      - created_at
    - workouts
      - id
      - user_id
      - name
      - type
      - duration
      - calories_burned
      - date
    - exercises
      - id
      - name
      - description
      - muscle_group
      - difficulty
    - workout_exercises
      - workout_id
      - exercise_id
      - sets
      - reps
      - weight
    - goals
      - id
      - user_id
      - type
      - target
      - deadline
      - progress
  
  2. Security
    - Enable RLS on all tables
    - Add policies for user data access
*/

-- Users Metadata
CREATE TABLE users_metadata (
  id UUID PRIMARY KEY REFERENCES auth.users,
  height NUMERIC,
  weight NUMERIC,
  goals JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE users_metadata ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own metadata"
  ON users_metadata FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own metadata"
  ON users_metadata FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Workouts
CREATE TABLE workouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  duration INTEGER,
  calories_burned INTEGER,
  date TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own workouts"
  ON workouts FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Exercises Library
CREATE TABLE exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  muscle_group TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Exercises are readable by all authenticated users"
  ON exercises FOR SELECT
  TO authenticated
  USING (true);

-- Workout Exercises (Junction table)
CREATE TABLE workout_exercises (
  workout_id UUID REFERENCES workouts ON DELETE CASCADE,
  exercise_id UUID REFERENCES exercises ON DELETE CASCADE,
  sets INTEGER,
  reps INTEGER,
  weight NUMERIC,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (workout_id, exercise_id)
);

ALTER TABLE workout_exercises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own workout exercises"
  ON workout_exercises FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM workouts
      WHERE workouts.id = workout_exercises.workout_id
      AND workouts.user_id = auth.uid()
    )
  );

-- Goals
CREATE TABLE goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  type TEXT NOT NULL,
  target NUMERIC NOT NULL,
  deadline TIMESTAMPTZ,
  progress NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own goals"
  ON goals FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);