import React from 'react';
import { Card } from "@/components/ui/card";
import StatCard from '@/components/StatCard';
import ChartSection from '@/components/ChartSection';
import DetectionOverview from '@/components/DetectionOverview';
import HackingAttemptsChart from '@/components/HackingAttemptsChart';
import HackingBlocksChart from '@/components/HackingBlocksChart';
import HackingTypesChart from '@/components/HackingTypesChart';

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
        <HackingAttemptsChart />
      </ChartSection>
      <ChartSection title="12-Month Trend of Hacking Blocks">
        <HackingBlocksChart />
      </ChartSection>
      <ChartSection title="Hacking Detections Overview">
        <DetectionOverview />
      </ChartSection>
      <ChartSection title="Hacking Types">
        <HackingTypesChart />
      </ChartSection>
    </div>
  );
};

export default Index;
