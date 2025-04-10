
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

type PhraseItem = {
  id: number;
  text: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
};

type PracticePhrasesProps = {
  phrases: PhraseItem[];
  onSelect: (phrase: PhraseItem) => void;
  selectedId?: number;
};

const PracticePhrases: React.FC<PracticePhrasesProps> = ({
  phrases,
  onSelect,
  selectedId,
}) => {
  const getDifficultyColor = (difficulty: string): string => {
    switch(difficulty) {
      case 'beginner': return 'text-green-500 bg-green-50';
      case 'intermediate': return 'text-blue-500 bg-blue-50';
      case 'advanced': return 'text-purple-500 bg-purple-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Practice Phrases</CardTitle>
        <CardDescription>Select a phrase to practice pronunciation</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {phrases.map((phrase) => (
            <div 
              key={phrase.id} 
              className={`p-4 cursor-pointer transition-colors hover:bg-muted/50 flex justify-between items-center ${selectedId === phrase.id ? 'bg-muted/50' : ''}`}
              onClick={() => onSelect(phrase)}
            >
              <div className="flex-1">
                <p className="font-medium">{phrase.text}</p>
                <div className="flex gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(phrase.difficulty)}`}>
                    {phrase.difficulty}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {phrase.category}
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticePhrases;
