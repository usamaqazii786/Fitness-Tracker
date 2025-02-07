import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, TrendingUp, Scale, Activity } from 'lucide-react';

export default function Progress() {
  const data = [
    { date: '2024-01-01', weight: 93, workouts: 2, calories: 2000 },
    { date: '2024-01-02', weight: 74.8, workouts: 1, calories: 1800 },
    { date: '2024-01-03', weight: 64.5, workouts: 3, calories: 2200 },
    { date: '2024-01-04', weight: 54.3, workouts: 2, calories: 1900 },
    { date: '2024-01-05', weight: 64.0, workouts: 2, calories: 2100 },
    { date: '2024-01-06', weight: 83.8, workouts: 1, calories: 1950 },
    { date: '2024-01-07', weight: 97.5, workouts: 3, calories: 2300 },
  ];

  const metrics = [
    { name: 'Total Workouts', value: '15', icon: Activity, change: '+3', trend: 'up' },
    { name: 'Current Weight', value: '73.5 kg', icon: Scale, change: '-1.5', trend: 'down' },
    { name: 'Avg. Daily Calories', value: '2,050', icon: TrendingUp, change: '+150', trend: 'up' },
    { name: 'Active Days', value: '12', icon: Calendar, change: '+2', trend: 'up' },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>

      <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="overflow-hidden bg-white rounded-lg shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <metric.icon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1 w-0 ml-5">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{metric.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Weight Progress</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Workout Frequency</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="workouts" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}