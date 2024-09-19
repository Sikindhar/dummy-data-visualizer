import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import DetectionButton from './DetectionButton';

const initialHackingDetectionsData = [
  { name: 'OS Version - Major', value: 30 },
  { name: 'Rooting', value: 20 },
  { name: 'Hacking Types', value: 30 },
  { name: 'OS Version - Minor', value: 20 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const DetectionOverview = () => {
  const [activeDetection, setActiveDetection] = useState('OS Version - Major');
  const [hackingDetectionsData, setHackingDetectionsData] = useState(initialHackingDetectionsData);

  const handleDetectionClick = (label) => {
    setActiveDetection(label);
    // Simulate data change when a button is clicked
    const newData = initialHackingDetectionsData.map(item => ({
      ...item,
      value: item.name === label ? item.value * 1.5 : item.value * 0.8
    }));
    setHackingDetectionsData(newData);
  };

  return (
    <div className="flex">
      <div className="w-1/3 pr-4">
        {initialHackingDetectionsData.map(({ name }) => (
          <DetectionButton
            key={name}
            label={name}
            isActive={activeDetection === name}
            onClick={() => handleDetectionClick(name)}
          />
        ))}
      </div>
      <div className="w-2/3">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={hackingDetectionsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {hackingDetectionsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DetectionOverview;
