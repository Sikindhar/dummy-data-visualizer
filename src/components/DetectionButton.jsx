import React from 'react';
import { Button } from "@/components/ui/button";

const DetectionButton = ({ label, isActive, onClick }) => (
  <Button
    variant={isActive ? "default" : "outline"}
    className="w-full mb-2"
    onClick={onClick}
  >
    {label}
  </Button>
);

export default DetectionButton;
