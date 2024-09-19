import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

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
  { day: 11, attempts: 9 },
  { day: 12, attempts: 4 },
  { day: 13, attempts: 7 },
  { day: 14, attempts: 5 },
  { day: 15, attempts: 8 },
  { day: 16, attempts: 6 },
  { day: 17, attempts: 3 },
  { day: 18, attempts: 7 },
  { day: 19, attempts: 4 },
  { day: 20, attempts: 5 },
  { day: 21, attempts: 6 },
  { day: 22, attempts: 8 },
  { day: 23, attempts: 3 },
  { day: 24, attempts: 7 },
  { day: 25, attempts: 5 },
  { day: 26, attempts: 4 },
  { day: 27, attempts: 6 },
  { day: 28, attempts: 9 },
  { day: 29, attempts: 5 },
  { day: 30, attempts: 7 },
];

const hackingBlocksData = [
  { month: 1, blocks: 1 },
  { month: 2, blocks: 2 },
  { month: 3, blocks: 3 },
  { month: 4, blocks: 4 },
  { month: 5, blocks: 5 },
  { month: 6, blocks: 6 },
  { month: 7, blocks: 7 },
  { month: 8, blocks: 8 },
  { month: 9, blocks: 9 },
  { month: 10, blocks: 10 },
  { month: 11, blocks: 11 },
  { month: 12, blocks: 12 },
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
        <StatCard title="Active Devices" value="1,234" percentage="+2.5%" />
        <StatCard title="Hacking Attempts" value="5,678" percentage="+1.8%" />
        <StatCard title="Unique Devices Hacking Attempts" value="987" percentage="+3.2%" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">12-Month Trend of Hacking Blocks</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hackingBlocksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="blocks" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Index;
