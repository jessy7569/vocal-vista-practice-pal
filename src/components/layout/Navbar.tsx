
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, BookOpen, BarChart, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-4">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Vocal Vista</span>
        </div>
        
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link 
            to="/practice" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Practice
          </Link>
          <Link 
            to="/progress" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Progress
          </Link>
          <Link 
            to="/resources" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resources
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="" alt="Student" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
