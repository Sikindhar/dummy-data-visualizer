import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

const hackingBlocksData = [
  { month: 1, blocks: 1 },
  { month: 2, blocks: 2 },
  { month: 3, blocks: 3 },
  { month: 4, blocks: 4 },
  { month: 5, blocks: 5 },
  { month: 6, blocks: 6 },
];

const hackingDetectionsData = [
  { name: 'OS Version - Major', value: 30 },
  { name: 'Rooting', value: 20 },
  { name: 'Hacking Types', value: 30 },
  { name: 'OS Version - Minor', value: 20 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const StatCard = ({ title, value, percentage }) => (
  <Card className="p-4">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
    <p className="text-sm text-blue-500 mt-1">{percentage}</p>
  </Card>
);

const ChartSection = ({ title, children }) => (
  <Card className="p-6 mb-8">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="h-80">{children}</div>
  </Card>
);

const DetectionButton = ({ label, isActive }) => (
  <Button
    variant={isActive ? "default" : "outline"}
    className="w-full mb-2"
  >
    {label}
  </Button>
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
      <ChartSection title="Hacking Attempts Over Time">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="attempts" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartSection>
      <ChartSection title="12-Month Trend of Hacking Blocks">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={hackingBlocksData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="blocks" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </ChartSection>
      <ChartSection title="Hacking Detections Overview">
        <div className="flex">
          <div className="w-1/3 pr-4">
            <DetectionButton label="OS Version - Major" isActive={true} />
            <DetectionButton label="Rooting" isActive={false} />
            <DetectionButton label="Hacking Types" isActive={false} />
            <DetectionButton label="OS Version - Minor" isActive={false} />
          </div>
          <div className="w-2/3">
            <ResponsiveContainer width="100%" height="100%">
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
      </ChartSection>
    </div>
  );
};

export default Index;
