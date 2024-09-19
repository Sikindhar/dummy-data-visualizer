import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 1, 'Cheat tool': 1, 'ETC': 0, 'Detour security module': 0, 'Debugging': 0, 'Rooted device': 1, 'Source code modification': 0, 'Speed modification': 0, 'Repackaged application': 0, 'Android emulator': 0 },
  { day: 2, 'Cheat tool': 2, 'ETC': 1, 'Detour security module': 0, 'Debugging': 1, 'Rooted device': 1, 'Source code modification': 0, 'Speed modification': 0, 'Repackaged application': 0, 'Android emulator': 0 },
  { day: 3, 'Cheat tool': 3, 'ETC': 1, 'Detour security module': 1, 'Debugging': 1, 'Rooted device': 2, 'Source code modification': 1, 'Speed modification': 0, 'Repackaged application': 0, 'Android emulator': 0 },
  { day: 4, 'Cheat tool': 4, 'ETC': 2, 'Detour security module': 1, 'Debugging': 2, 'Rooted device': 2, 'Source code modification': 1, 'Speed modification': 1, 'Repackaged application': 0, 'Android emulator': 0 },
  { day: 5, 'Cheat tool': 5, 'ETC': 2, 'Detour security module': 2, 'Debugging': 2, 'Rooted device': 3, 'Source code modification': 1, 'Speed modification': 1, 'Repackaged application': 1, 'Android emulator': 0 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F'];

const HackingTypesChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(data[0]).filter(key => key !== 'day').map((key, index) => (
          <Bar key={key} dataKey={key} stackId="a" fill={COLORS[index % COLORS.length]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HackingTypesChart;
