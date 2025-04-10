
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for progress charts
const weeklyData = [
  { day: 'Mon', pronunciation: 65, intonation: 70, rhythm: 55, grammar: 80 },
  { day: 'Tue', pronunciation: 68, intonation: 72, rhythm: 58, grammar: 82 },
  { day: 'Wed', pronunciation: 72, intonation: 75, rhythm: 62, grammar: 83 },
  { day: 'Thu', pronunciation: 75, intonation: 76, rhythm: 65, grammar: 85 },
  { day: 'Fri', pronunciation: 78, intonation: 78, rhythm: 68, grammar: 86 },
  { day: 'Sat', pronunciation: 81, intonation: 80, rhythm: 70, grammar: 87 },
  { day: 'Sun', pronunciation: 85, intonation: 82, rhythm: 73, grammar: 89 },
];

const monthlyData = [
  { week: 'Week 1', overall: 68, sessions: 5 },
  { week: 'Week 2', overall: 72, sessions: 6 },
  { week: 'Week 3', overall: 78, sessions: 8 },
  { week: 'Week 4', overall: 83, sessions: 7 },
];

const practiceHistory = [
  { date: '2025-04-09', phrase: 'Hello, how are you doing today?', metrics: { pronunciation: 85, intonation: 75, rhythm: 68, grammar: 92 } },
  { date: '2025-04-08', phrase: 'Could you please repeat that more slowly?', metrics: { pronunciation: 82, intonation: 73, rhythm: 65, grammar: 90 } },
  { date: '2025-04-07', phrase: 'I\'m having trouble understanding this concept.', metrics: { pronunciation: 78, intonation: 70, rhythm: 60, grammar: 88 } },
  { date: '2025-04-05', phrase: 'The professor explained the theory in great detail.', metrics: { pronunciation: 75, intonation: 68, rhythm: 58, grammar: 86 } },
  { date: '2025-04-03', phrase: 'The significance of this research cannot be overstated.', metrics: { pronunciation: 70, intonation: 65, rhythm: 55, grammar: 82 } },
];

const Progress = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageContainer 
        title="Progress Tracking" 
        subtitle="Monitor your improvement over time"
      >
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="history">Practice History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your speaking metrics for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="pronunciation" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="intonation" stroke="#10B981" strokeWidth={2} />
                      <Line type="monotone" dataKey="rhythm" stroke="#F59E0B" strokeWidth={2} />
                      <Line type="monotone" dataKey="grammar" stroke="#8B5CF6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="p-4 border rounded-md bg-blue-50">
                    <h3 className="font-medium text-blue-700">Pronunciation</h3>
                    <p className="text-2xl font-bold text-blue-700">85%</p>
                    <p className="text-xs text-blue-600">↑ 20% from last week</p>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-green-50">
                    <h3 className="font-medium text-green-700">Intonation</h3>
                    <p className="text-2xl font-bold text-green-700">82%</p>
                    <p className="text-xs text-green-600">↑ 12% from last week</p>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-yellow-50">
                    <h3 className="font-medium text-yellow-700">Rhythm</h3>
                    <p className="text-2xl font-bold text-yellow-700">73%</p>
                    <p className="text-xs text-yellow-600">↑ 18% from last week</p>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-purple-50">
                    <h3 className="font-medium text-purple-700">Grammar</h3>
                    <p className="text-2xl font-bold text-purple-700">89%</p>
                    <p className="text-xs text-purple-600">↑ 9% from last week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>Your progress over the past month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" />
                      <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="overall" name="Overall Score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="right" dataKey="sessions" name="Practice Sessions" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 border rounded-md bg-blue-50">
                    <h3 className="font-medium text-blue-700">Average Score</h3>
                    <p className="text-2xl font-bold text-blue-700">75%</p>
                    <p className="text-xs text-blue-600">↑ 15% from last month</p>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-green-50">
                    <h3 className="font-medium text-green-700">Total Sessions</h3>
                    <p className="text-2xl font-bold text-green-700">26</p>
                    <p className="text-xs text-green-600">↑ 8 from last month</p>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-purple-50">
                    <h3 className="font-medium text-purple-700">Most Improved</h3>
                    <p className="text-md font-bold text-purple-700">Pronunciation</p>
                    <p className="text-xs text-purple-600">↑ 20% improvement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Practice History</CardTitle>
                <CardDescription>Your recent speech practice sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {practiceHistory.map((session, index) => {
                    const metrics = session.metrics;
                    const average = Object.values(metrics).reduce((sum, val) => sum + val, 0) / Object.values(metrics).length;
                    
                    return (
                      <div key={index} className="p-4 border rounded-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{session.phrase}</p>
                            <p className="text-sm text-muted-foreground">{session.date}</p>
                          </div>
                          <div className="text-lg font-bold">{Math.round(average)}%</div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-sm">Pronunciation: {metrics.pronunciation}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm">Intonation: {metrics.intonation}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm">Rhythm: {metrics.rhythm}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-sm">Grammar: {metrics.grammar}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </div>
  );
};

export default Progress;
