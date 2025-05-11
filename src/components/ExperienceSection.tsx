
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Scientist and Software Developer",
      company: "Graphext",
      duration: "2020-Present",
      description: "Developed AI and NLP solutions to analyze any user-uploaded data. Designed and developed custom coding language and execution pipelines to allow users to create their own data solutions."
    },
    {
      title: "Data Scientist and Software Developer",
      company: "Graphext",
      duration: "2018-2020",
      description: "Developed data products and solutions to gather and analyze social network textual and visual data."
    },
    {
      title: "Data Analytics Intern",
      company: "Weplan Analytics",
      duration: "2017-2018",
      description: "Implemented analytic solutions and deployed predictive models to help understand Orange's clients usage of network data."
    }
  ];

  return (
    <div className="section-container">
      <h3 className="section-title flex items-center gap-2">
        <Briefcase size={20} />
        <span>Work Experience</span>
      </h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-medium">{exp.title} | {exp.company}</h4>
                <span className="text-sm text-muted-foreground">{exp.duration}</span>
              </div>
              <p className="text-sm">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
