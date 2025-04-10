
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Play, BookOpen, Bookmark, Award, TrendingUp } from 'lucide-react';

const Index = () => {
  // Mock data for the dashboard
  const recentActivities = [
    { id: 1, date: '2025-04-09', type: 'Practice', title: 'Common greetings', duration: '5 min', score: 87 },
    { id: 2, date: '2025-04-08', type: 'Practice', title: 'Introducing yourself', duration: '7 min', score: 82 },
    { id: 3, date: '2025-04-07', type: 'Practice', title: 'Asking directions', duration: '6 min', score: 75 },
  ];
  
  const progressStats = {
    sessions: 12,
    minutesPracticed: 68,
    streak: 4,
    overallProgress: 72,
  };
  
  const recommendedPhrases = [
    { id: 1, text: "Would you mind repeating that, please?", difficulty: "intermediate" },
    { id: 2, text: "I'm having trouble understanding this concept.", difficulty: "intermediate" },
    { id: 3, text: "Could you explain how this works?", difficulty: "beginner" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageContainer title="Student Dashboard" subtitle="Track your speech progress and practice sessions">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.sessions}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Minutes Practiced</CardTitle>
              <Play className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.minutesPracticed}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.streak} days</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.overallProgress}%</div>
              <Progress className="mt-2" value={progressStats.overallProgress} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 mt-6 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-4">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest speech practice sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.date} • {activity.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{activity.score}%</span>
                      <Button size="sm" variant="ghost">
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
          
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Recommended Practice</CardTitle>
              <CardDescription>Phrases tailored to improve your skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendedPhrases.map((phrase) => (
                  <div key={phrase.id} className="p-3 border rounded-md">
                    <p className="font-medium">{phrase.text}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        {phrase.difficulty}
                      </span>
                      <Button size="sm" variant="ghost">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/practice" className="w-full">
                <Button className="w-full">Start Practice</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </PageContainer>
    </div>
  );
};

export default Index;
