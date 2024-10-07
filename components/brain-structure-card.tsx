import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainStructure } from '@/lib/brain-data';
import { Badge } from "@/components/ui/badge";

interface BrainStructureCardProps {
  structure: BrainStructure;
  onClick: () => void;
}

export const BrainStructureCard: React.FC<BrainStructureCardProps> = ({ structure, onClick }) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{structure.term}</CardTitle>
          <Badge variant={structure.category === "Division" ? "default" : "secondary"}>
            {structure.category}
          </Badge>
        </div>
        {structure.parent && (
          <CardDescription>Part of: {structure.parent}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{structure.function}</p>
        {structure.children.length > 0 && (
          <div>
            <strong className="text-sm">Subdivisions:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {structure.children.map((child) => (
                <Badge key={child} variant="outline">{child}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};