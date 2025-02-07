import React from 'react';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function Goals() {
  const goals = [
    {
      id: 1,
      title: 'Weight Goal',
      current: 75,
      target: 70,
      unit: 'kg',
      progress: 60,
      category: 'Weight Management',
    },
    {
      id: 2,
      title: 'Weekly Workouts',
      current: 3,
      target: 5,
      unit: 'sessions',
      progress: 60,
      category: 'Exercise',
    },
    {
      id: 3,
      title: 'Daily Steps',
      current: 8000,
      target: 10000,
      unit: 'steps',
      progress: 80,
      category: 'Activity',
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Fitness Goals</h1>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Target className="w-5 h-5 mr-2" />
            Add New Goal
          </button>
        </div>
      </div>

      <div className="grid gap-6 mt-8 lg:grid-cols-2">
        {goals.map((goal) => (
          <div key={goal.id} className="overflow-hidden bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{goal.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {goal.category}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-gray-900">
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="flex h-2 overflow-hidden text-xs bg-indigo-200 rounded">
                    <div
                      style={{ width: `${goal.progress}%` }}
                      className="flex flex-col justify-center text-center text-white bg-indigo-600 shadow-none whitespace-nowrap"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-3">
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Update Progress
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Achievements</h3>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'First Workout', icon: Award, date: '2024-01-01' },
              { title: '5 Day Streak', icon: TrendingUp, date: '2024-01-05' },
              { title: 'Goal Achieved', icon: Target, date: '2024-01-07' },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50">
                <achievement.icon className="w-8 h-8 text-indigo-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}