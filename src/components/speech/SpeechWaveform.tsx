
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type SpeechWaveformProps = {
  isActive?: boolean;
  className?: string;
  color?: string;
};

const SpeechWaveform: React.FC<SpeechWaveformProps> = ({ 
  isActive = false, 
  className,
  color = "text-primary"
}) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!waveformRef.current) return;
    
    const container = waveformRef.current;
    const barCount = 9;
    
    // Clear existing bars
    container.innerHTML = '';
    
    // Create new bars
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'waveform-bar';
      
      // Set the height based on a sine wave pattern for visual appeal
      const height = 10 + Math.sin((i / (barCount - 1)) * Math.PI) * 30;
      bar.style.height = `${height}px`;
      
      // Add animation only if active
      if (isActive) {
        bar.style.animation = `wave ${0.8 + Math.random() * 0.5}s ease-in-out infinite`;
        bar.style.animationDelay = `${i * 0.1}s`;
      }
      
      container.appendChild(bar);
    }
  }, [isActive]);

  return (
    <div 
      ref={waveformRef} 
      className={cn("waveform", color, className)}
    />
  );
};

export default SpeechWaveform;
