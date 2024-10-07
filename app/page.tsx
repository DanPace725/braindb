"use client"

import React, { useState } from 'react';
import { BrainStructureCard } from '@/components/brain-structure-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { getMainDivisions, getChildStructures, BrainStructure } from '@/lib/brain-data';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function Home() {
  const [currentStructure, setCurrentStructure] = useState<BrainStructure | null>(null);
  const [history, setHistory] = useState<BrainStructure[]>([]);

  const handleStructureClick = (structure: BrainStructure) => {
    setHistory(prev => [...prev, structure]);
    setCurrentStructure(structure);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentStructure(newHistory[newHistory.length - 1]);
    } else {
      setHistory([]);
      setCurrentStructure(null);
    }
  };

  const structures = currentStructure ? getChildStructures(currentStructure.term) : getMainDivisions();

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Brain Structure Explorer</h1>
        <ThemeToggle />
      </header>
      
      <div className="mb-4 flex items-center">
        <Button onClick={handleBack} disabled={history.length === 0} variant="outline" size="sm">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {currentStructure && (
          <span className="ml-4 text-lg font-semibold">{currentStructure.term}</span>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {structures.map((structure) => (
          <BrainStructureCard
            key={structure.term}
            structure={structure}
            onClick={() => handleStructureClick(structure)}
          />
        ))}
      </div>
    </div>
  );
}