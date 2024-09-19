import React from 'react';
import { Button } from "@/components/ui/button";

const DetectionButton = ({ label, isActive }) => (
  <Button
    variant={isActive ? "default" : "outline"}
    className="w-full mb-2"
  >
    {label}
  </Button>
);

export default DetectionButton;