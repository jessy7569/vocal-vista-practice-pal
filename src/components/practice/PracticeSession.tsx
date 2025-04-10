
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RecordButton from '@/components/speech/RecordButton';
import SpeechWaveform from '@/components/speech/SpeechWaveform';
import { Button } from '@/components/ui/button';
import { ArrowRight, RefreshCw } from 'lucide-react';

type PracticeSessionProps = {
  phrase: {
    id: number;
    text: string;
    difficulty: string;
    category: string;
  };
  onComplete: () => void;
};

const PracticeSession: React.FC<PracticeSessionProps> = ({
  phrase,
  onComplete,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Here you would typically start actual recording logic
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
    // Here you would typically stop actual recording logic
    
    // Simulate processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  const handlePlayRecording = () => {
    setIsPlaying(true);
    // Here you would typically implement playback logic
    
    // Simulate playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  const handleReset = () => {
    setHasRecording(false);
    setIsPlaying(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Practice Session</CardTitle>
        <CardDescription>Record yourself saying the phrase</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium text-lg mb-1">Phrase to practice:</h3>
          <p className="text-2xl">{phrase.text}</p>
        </div>

        <div className="space-y-4">
          <div className="h-20 flex items-center justify-center">
            {isRecording || isPlaying ? (
              <SpeechWaveform isActive={true} />
            ) : hasRecording ? (
              <SpeechWaveform isActive={false} />
            ) : (
              <p className="text-muted-foreground text-center">Press the microphone button to start recording</p>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <RecordButton
              isRecording={isRecording}
              hasRecording={hasRecording}
              isProcessing={isProcessing}
              onStart={handleStartRecording}
              onStop={handleStopRecording}
              onPlay={handlePlayRecording}
            />

            <div className="flex gap-2">
              {hasRecording && (
                <>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                  <Button size="sm" onClick={onComplete}>
                    Get Feedback
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticeSession;
