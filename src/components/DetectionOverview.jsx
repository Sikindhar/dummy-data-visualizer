import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import DetectionButton from './DetectionButton';

const hackingDetectionsData = [
  { name: 'OS Version - Major', value: 30 },
  { name: 'Rooting', value: 20 },
  { name: 'Hacking Types', value: 30 },
  { name: 'OS Version - Minor', value: 20 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const DetectionOverview = () => {
  const [activeDetection, setActiveDetection] = useState('OS Version - Major');

  const handleDetectionClick = (label) => {
    setActiveDetection(label);
  };

  return (
    <div className="flex">
      <div className="w-1/3 pr-4">
        {hackingDetectionsData.map(({ name }) => (
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  opacity={activeDetection === entry.name ? 1 : 0.6}
                  stroke={activeDetection === entry.name ? "#000" : "none"}
                  strokeWidth={2}
                />
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
