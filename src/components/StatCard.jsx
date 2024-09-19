import React from 'react';
import { Card } from "@/components/ui/card";

const StatCard = ({ title, value, percentage }) => (
  <Card className="p-4">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
    <p className="text-sm text-blue-500 mt-1">{percentage}</p>
  </Card>
);

export default StatCard;
