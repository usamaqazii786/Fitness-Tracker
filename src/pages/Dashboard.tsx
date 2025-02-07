import React from 'react';
import { Activity, Target, Dumbbell, TrendingUp, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const stats = [
    { label: 'Workouts This Week', value: '5', change: '+2', changeType: 'increase' },
    { label: 'Active Minutes', value: '320', change: '+25', changeType: 'increase' },
    { label: 'Calories Burned', value: '2,450', change: '+300', changeType: 'increase' },
    { label: 'Goals Completed', value: '3', change: '+1', changeType: 'increase' },
  ];

  const quickLinks = [
    { name: 'Goals', icon: Target, href: '/goals', color: 'text-blue-600' },
    { name: 'Exercises', icon: Dumbbell, href: '/exercises', color: 'text-green-600' },
    { name: 'Progress', icon: TrendingUp, href: '/progress', color: 'text-purple-600' },
    { name: 'Nutrition', icon: Utensils, href: '/nutrition', color: 'text-orange-600' },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Activity className="w-5 h-5 mr-2" />
            Start Workout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="overflow-hidden bg-white rounded-lg shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">{stat.label}</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className={`text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="overflow-hidden transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-md"
          >
            <div className="p-5">
              <div className="flex items-center">
                <link.icon className={`h-8 w-8 ${link.color}`} />
                <h3 className="ml-3 text-lg font-medium text-gray-900">{link.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-4 divide-y divide-gray-200">
            {[
              { activity: 'Completed upper body workout', time: '2 hours ago' },
              { activity: 'Achieved daily step goal', time: '5 hours ago' },
              { activity: 'Logged nutrition intake', time: '8 hours ago' },
            ].map((item, index) => (
              <div key={index} className="py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-800">{item.activity}</p>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}