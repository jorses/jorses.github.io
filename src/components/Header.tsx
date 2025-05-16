import React from 'react';
import { Card } from "@/components/ui/card";
import { User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      <div className="w-40 h-40 relative rounded-full border-4 border-secondary overflow-hidden flex items-center justify-center bg-secondary">
        <Avatar className="w-full h-full">
          <AvatarImage 
            src="/pic.jpg" 
            alt="Profile picture" 
            className="object-cover"
          />
          <AvatarFallback className="bg-muted rounded-full p-8">
            <User size={48} className="text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
      </div>
      <Card className="flex-1 p-6 text-center sm:text-left">
        <h1 className="text-3xl font-bold mb-1">Jorge Osés Grijalba</h1>
        <h2 className="text-xl text-muted-foreground mb-4">Senior Data Science Developer</h2>
        <p className="text-sm text-muted-foreground mb-4">
          I like building stuff.
        </p>
        <div className="flex flex-wrap gap-3 text-sm justify-center sm:justify-start">
          <a href="mailto:your.email@example.com" className="text-primary hover:underline">jorgeosesgrijalba@gmail.com</a>
          <span className="text-muted-foreground">|</span>
          <a href="https://github.com/jorses" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/jorses</a>
          <span className="text-muted-foreground">|</span>
          <a href="https://linkedin.com/in/jorses" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/jorses</a>
        </div>
      </Card>
    </div>
  );
};

export default Header;
