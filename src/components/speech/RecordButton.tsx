
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Square, Play, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type RecordButtonProps = {
  onStart: () => void;
  onStop: () => void;
  onPlay?: () => void;
  isRecording: boolean;
  hasRecording: boolean;
  isProcessing?: boolean;
  className?: string;
};

const RecordButton: React.FC<RecordButtonProps> = ({
  onStart,
  onStop,
  onPlay,
  isRecording,
  hasRecording,
  isProcessing = false,
  className,
}) => {
  return (
    <div className={cn("flex justify-center gap-3", className)}>
      {isRecording ? (
        <Button 
          variant="destructive" 
          size="lg" 
          className="h-14 w-14 rounded-full p-0"
          onClick={onStop}
        >
          <Square className="h-6 w-6" />
        </Button>
      ) : (
        <>
          <Button 
            variant="default" 
            size="lg" 
            className="h-14 w-14 rounded-full p-0 bg-primary hover:bg-primary/90"
            onClick={onStart}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>
          
          {hasRecording && onPlay && (
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 w-14 rounded-full p-0"
              onClick={onPlay}
              disabled={isProcessing}
            >
              <Play className="h-6 w-6" />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default RecordButton;
