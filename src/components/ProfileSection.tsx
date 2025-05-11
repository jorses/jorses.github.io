
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <div className="section-container">
      <h3 className="section-title">Profile</h3>
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm">
            I'm a data science developer and PhD candidate on Computer Science. 
            My research focuses on Tabular Reasoning through Large Language Models, 
            and I pair it with 5+ years of practical experience designing, 
            implementing and delivering data-driven solutions to complex problems
            in both software engineering and data science.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
