import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const hackingBlocksData = [
  { month: 1, blocks: 1 },
  { month: 2, blocks: 2 },
  { month: 3, blocks: 3 },
  { month: 4, blocks: 4 },
  { month: 5, blocks: 5 },
  { month: 6, blocks: 6 },
];

const HackingBlocksChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={hackingBlocksData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="blocks" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default HackingBlocksChart;