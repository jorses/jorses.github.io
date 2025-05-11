
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <div className="section-container">
      <h3 className="section-title">Profile</h3>
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm">
I am a Data Scientist, Software Engineer, and PhD candidate in Computer Science. My research specializes in Tabular Reasoning with Large Language Models. In addition, I bring over five years of hands-on experience in designing, implementing, and delivering data-driven solutions to complex challenges across both software engineering and data science          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
