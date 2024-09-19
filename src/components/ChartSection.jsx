import React from 'react';
import { Card } from "@/components/ui/card";

const ChartSection = ({ title, children }) => (
  <Card className="p-6 mb-8">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="h-80">{children}</div>
  </Card>
);

export default ChartSection;
