/*
  # Initial Schema for Fitness Tracker

  1. New Tables
    - users (managed by Supabase Auth)
    - profiles
      - user_id (references auth.users)
      - full_name
      - weight
      - height
      - goal_weight
      - created_at
    - workouts
      - id
      - user_id
      - type
      - duration
      - calories_burned
      - date
      - notes
    - exercises
      - id
      - name
      - description
      - category
      - image_url
    - workout_exercises
      - workout_id
      - exercise_id
      - sets
      - reps
      - weight
    - nutrition_logs
      - id
      - user_id
      - meal_type
      - food_name
      - calories
      - protein
      - carbs
      - fats
      - date

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text,
  weight numeric,
  height numeric,
  goal_weight numeric,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create workouts table
CREATE TABLE workouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  type text NOT NULL,
  duration integer NOT NULL,
  calories_burned integer,
  date date DEFAULT CURRENT_DATE,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create exercises table
CREATE TABLE exercises (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Create workout_exercises table
CREATE TABLE workout_exercises (
  workout_id uuid REFERENCES workouts(id) ON DELETE CASCADE,
  exercise_id uuid REFERENCES exercises(id) ON DELETE CASCADE,
  sets integer,
  reps integer,
  weight numeric,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (workout_id, exercise_id)
);

-- Create nutrition_logs table
CREATE TABLE nutrition_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  meal_type text NOT NULL,
  food_name text NOT NULL,
  calories integer NOT NULL,
  protein numeric,
  carbs numeric,
  fats numeric,
  date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE workout_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE nutrition_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can view their own workouts"
  ON workouts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own workouts"
  ON workouts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own workouts"
  ON workouts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own workouts"
  ON workouts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Exercises are viewable by all authenticated users"
  ON exercises FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view their workout exercises"
  ON workout_exercises FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM workouts
    WHERE workouts.id = workout_exercises.workout_id
    AND workouts.user_id = auth.uid()
  ));

CREATE POLICY "Users can manage their workout exercises"
  ON workout_exercises FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM workouts
    WHERE workouts.id = workout_exercises.workout_id
    AND workouts.user_id = auth.uid()
  ));

CREATE POLICY "Users can view their nutrition logs"
  ON nutrition_logs FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their nutrition logs"
  ON nutrition_logs FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);