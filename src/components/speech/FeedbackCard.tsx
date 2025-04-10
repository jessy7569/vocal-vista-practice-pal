
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type FeedbackMetric = {
  name: string;
  score: number;
  feedback: string;
  color?: string;
};

type FeedbackCardProps = {
  title: string;
  metrics: FeedbackMetric[];
  overallFeedback?: string;
  className?: string;
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  title,
  metrics,
  overallFeedback,
  className,
}) => {
  const getColorClass = (score: number, defaultColor = 'bg-primary'): string => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-yellow-500';
    if (score >= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Speech analysis feedback</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{metric.name}</span>
              <span className="text-sm font-medium">{metric.score}/100</span>
            </div>
            <Progress 
              value={metric.score} 
              className={cn("h-2", metric.color || getColorClass(metric.score))} 
            />
            <p className="text-sm text-muted-foreground mt-1">{metric.feedback}</p>
          </div>
        ))}

        {overallFeedback && (
          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">Overall Feedback</h4>
            <p className="text-sm">{overallFeedback}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">Great intonation</Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Clear pronunciation</Badge>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100">Work on pacing</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
