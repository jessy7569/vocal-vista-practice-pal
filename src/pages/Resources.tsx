
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, Headphones, FileText, ExternalLink, Info } from 'lucide-react';

// Mock data for resources
const resources = {
  guides: [
    {
      id: 1,
      title: "Pronunciation Guide for Students",
      description: "A comprehensive guide to English pronunciation covering vowels, consonants, and difficult sound combinations.",
      type: "guide",
      icon: BookOpen,
      color: "text-blue-500"
    },
    {
      id: 2,
      title: "Mastering Intonation Patterns",
      description: "Learn how to use rising and falling tones effectively in questions, statements, and academic discourse.",
      type: "guide",
      icon: BookOpen,
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "Rhythm and Pacing in Presentations",
      description: "Techniques for improving your speech timing, emphasis, and pause placement during academic presentations.",
      type: "guide",
      icon: BookOpen,
      color: "text-blue-500"
    },
  ],
  videos: [
    {
      id: 4,
      title: "English Sound System Explained",
      description: "Professor Johnson explains the foundations of English phonology and common student challenges.",
      type: "video",
      icon: Video,
      color: "text-purple-500",
      duration: "15:24"
    },
    {
      id: 5,
      title: "Classroom Speaking Confidence",
      description: "Tips and techniques for speaking with confidence during class discussions and presentations.",
      type: "video",
      icon: Video,
      color: "text-purple-500",
      duration: "12:07"
    },
    {
      id: 6,
      title: "Academic Vocabulary Pronunciation",
      description: "How to pronounce common academic terms and discipline-specific vocabulary correctly.",
      type: "video",
      icon: Video,
      color: "text-purple-500",
      duration: "18:36"
    },
  ],
  exercises: [
    {
      id: 7,
      title: "Tongue Twisters for TH Sounds",
      description: "Practice exercises for mastering difficult English consonant sounds including 'th,' 'r,' and 'l.'",
      type: "exercise",
      icon: FileText,
      color: "text-green-500"
    },
    {
      id: 8,
      title: "Stress Pattern Drills",
      description: "Practice exercises for word and sentence stress in academic contexts.",
      type: "exercise",
      icon: FileText,
      color: "text-green-500"
    },
    {
      id: 9,
      title: "Question Intonation Practice",
      description: "Exercises to help you master the intonation patterns of different question types in English.",
      type: "exercise",
      icon: FileText,
      color: "text-green-500"
    },
  ],
  listening: [
    {
      id: 10,
      title: "Academic Lecture Samples",
      description: "Listen to examples of well-structured academic presentations with transcripts.",
      type: "audio",
      icon: Headphones,
      color: "text-amber-500",
      duration: "Various"
    },
    {
      id: 11,
      title: "Pronunciation Minimal Pairs",
      description: "Audio exercises to help distinguish between similar-sounding words in English.",
      type: "audio",
      icon: Headphones,
      color: "text-amber-500",
      duration: "Various"
    },
    {
      id: 12,
      title: "Classroom Discussion Samples",
      description: "Listen to natural classroom discussions and learn common phrases and responses.",
      type: "audio",
      icon: Headphones,
      color: "text-amber-500",
      duration: "Various"
    },
  ]
};

const ResourceCard = ({ resource }: { resource: any }) => {
  const { title, description, icon: Icon, color, duration, type } = resource;
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          {duration && <span>{duration}</span>}
          {!duration && <span>{type}</span>}
        </div>
        <Button size="sm">
          View Resource
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageContainer 
        title="Learning Resources" 
        subtitle="Materials to help improve your speaking skills"
      >
        <div className="bg-muted p-4 rounded-md mb-6 flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Study Tips</h3>
            <p className="text-sm text-muted-foreground">
              For best results, combine these resources with regular practice in our app. 
              Try to spend at least 15 minutes daily on speech exercises, 
              and record yourself to track improvement over time.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
            <TabsTrigger value="listening">Listening</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guides">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.guides.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.videos.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="exercises">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.exercises.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="listening">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.listening.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </div>
  );
};

export default Resources;
