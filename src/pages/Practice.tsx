
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import PageContainer from '@/components/layout/PageContainer';
import PracticePhrases from '@/components/practice/PracticePhrases';
import PracticeSession from '@/components/practice/PracticeSession';
import FeedbackCard from '@/components/speech/FeedbackCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Mock data for practice phrases
const PRACTICE_PHRASES = [
  {
    id: 1,
    text: "Hello, how are you doing today?",
    difficulty: "beginner" as const,
    category: "Greetings"
  },
  {
    id: 2,
    text: "Could you please repeat that more slowly?",
    difficulty: "beginner" as const,
    category: "Classroom"
  },
  {
    id: 3,
    text: "I'm having trouble understanding this concept.",
    difficulty: "intermediate" as const,
    category: "Academic"
  },
  {
    id: 4,
    text: "The professor explained the theory in great detail.",
    difficulty: "intermediate" as const,
    category: "Academic"
  },
  {
    id: 5,
    text: "The significance of this research cannot be overstated.",
    difficulty: "advanced" as const,
    category: "Research"
  },
];

// Mock feedback data
const MOCK_FEEDBACK = {
  title: "Speech Analysis",
  metrics: [
    {
      name: "Pronunciation",
      score: 85,
      feedback: "Good clarity on most words. Work on the 'th' sound."
    },
    {
      name: "Intonation",
      score: 75,
      feedback: "Your voice rises appropriately for questions, but try varying pitch more."
    },
    {
      name: "Rhythm & Pacing",
      score: 68,
      feedback: "Slightly too fast at times. Practice pausing between phrases."
    },
    {
      name: "Grammar",
      score: 92,
      feedback: "Excellent subject-verb agreement and tense usage."
    }
  ],
  overallFeedback: "You're making great progress! Focus on slowing down and emphasizing key words in sentences. Try recording yourself reading from a textbook to practice pacing."
};

type PracticeStep = 'select' | 'practice' | 'feedback';

const Practice = () => {
  const [selectedPhrase, setSelectedPhrase] = useState<(typeof PRACTICE_PHRASES)[0] | null>(null);
  const [currentStep, setCurrentStep] = useState<PracticeStep>('select');

  const handleSelectPhrase = (phrase: (typeof PRACTICE_PHRASES)[0]) => {
    setSelectedPhrase(phrase);
    setCurrentStep('practice');
  };

  const handlePracticeComplete = () => {
    setCurrentStep('feedback');
  };

  const handleBackToSelect = () => {
    setCurrentStep('select');
    setSelectedPhrase(null);
  };

  const handleStartOver = () => {
    if (selectedPhrase) {
      setCurrentStep('practice');
    } else {
      setCurrentStep('select');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageContainer 
        title="Speech Practice" 
        subtitle="Improve your pronunciation and speaking skills"
      >
        {currentStep === 'select' && (
          <div className="max-w-3xl mx-auto">
            <PracticePhrases 
              phrases={PRACTICE_PHRASES} 
              onSelect={handleSelectPhrase}
              selectedId={selectedPhrase?.id}
            />
          </div>
        )}

        {currentStep === 'practice' && selectedPhrase && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-4">
              <Button 
                variant="ghost" 
                onClick={handleBackToSelect}
                className="pl-0"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to phrases
              </Button>
            </div>
            <PracticeSession 
              phrase={selectedPhrase}
              onComplete={handlePracticeComplete}
            />
          </div>
        )}

        {currentStep === 'feedback' && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-4">
              <Button 
                variant="ghost" 
                onClick={handleStartOver}
                className="pl-0"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Try again
              </Button>
            </div>
            <FeedbackCard {...MOCK_FEEDBACK} />
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default Practice;
