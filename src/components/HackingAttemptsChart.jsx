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
  { day: 11, attempts: 9 },
  { day: 12, attempts: 4 },
  { day: 13, attempts: 7 },
  { day: 14, attempts: 5 },
  { day: 15, attempts: 8 },
];

const HackingAttemptsChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={dummyData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="attempts" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default HackingAttemptsChart;