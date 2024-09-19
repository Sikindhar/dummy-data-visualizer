import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { day: 1, attempts: 5 },
  { day: 2, attempts: 3 },
  { day: 3, attempts: 7 },
  { day: 4, attempts: 2 },
  { day: 5, attempts: 6 },
  { day: 6, attempts: 4 },
  { day: 7, attempts: 8 },
  { day: 8, attempts: 5 },
  { day: 9, attempts: 3 },
  { day: 10, attempts: 6 },
  // ... add more data points up to day 30
];

const StatCard = ({ title, value, percentage }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
    <p className="text-sm text-blue-500 mt-1">{percentage}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Threat Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Active Devices" value="0" percentage="0.00 %" />
        <StatCard title="Hacking Attempts" value="0" percentage="0.00 %" />
        <StatCard title="Unique Devices Hacking Attempts" value="0" percentage="0.00 %" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Hacking Attempts Over Time</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attempts" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Index;
