import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Plus, Apple, Beef, Heading as Bread, Fish } from 'lucide-react';

export default function Nutrition() {
  const macroData = [
    { name: 'Protein', value: 30, color: '#4F46E5' },
    { name: 'Carbs', value: 45, color: '#10B981' },
    { name: 'Fats', value: 25, color: '#F59E0B' },
  ];

  const meals = [
    {
      id: 1,
      name: 'Breakfast',
      time: '8:00 AM',
      calories: 450,
      items: ['Oatmeal', 'Banana', 'Protein Shake'],
      icon: Apple,
    },
    {
      id: 2,
      name: 'Lunch',
      time: '12:30 PM',
      calories: 650,
      items: ['Grilled Chicken', 'Brown Rice', 'Vegetables'],
      icon: Fish,
    },
    {
      id: 3,
      name: 'Dinner',
      time: '7:00 PM',
      calories: 550,
      items: ['Salmon', 'Sweet Potato', 'Broccoli'],
      icon: Beef,
    },
    {
      id: 4,
      name: 'Snacks',
      time: 'Various',
      calories: 300,
      items: ['Greek Yogurt', 'Almonds', 'Apple'],
      icon: Bread,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Nutrition Tracking</h1>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-5 w-5 mr-2" />
            Log Meal
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Today's Meals</h2>
            <div className="space-y-6">
              {meals.map((meal) => (
                <div key={meal.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <meal.icon className="h-6 w-6 text-indigo-600" />
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{meal.name}</h3>
                        <p className="text-sm text-gray-500">{meal.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{meal.calories} cal</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{meal.items.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Macronutrient Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macroData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {macroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              {macroData.map((macro) => (
                <div key={macro.name} className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: macro.color }}
                    />
                    <span className="text-sm text-gray-600">{macro.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{macro.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Daily Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Calories Goal</span>
                <span className="text-sm font-medium text-gray-900">2,000 cal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Calories Consumed</span>
                <span className="text-sm font-medium text-gray-900">1,950 cal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Remaining</span>
                <span className="text-sm font-medium text-green-600">50 cal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}