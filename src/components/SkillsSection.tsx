
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Languages } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = {
    programming: [
      "Python", "SQL", "JavaScript", "TypeScript", "C++", "Ruby"
    ],
    frameworks: [
      "PyTorch", "PyArrow", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "React", "Node.js", "Electron"
    ],
    tools: [
      "Git", "Docker", "AWS", "Azure", "GCP", "Kubernetes"
    ],
    other: [
      "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Visualization", "Statistical Analysis"
    ]
  };

  const languages = [
    { name: "Spanish", proficiency: "Native" },
    { name: "English", proficiency: "Bilingual" },
    { name: "中文", proficiency: "HSK 4 - Intermediate" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="section-container">
        <h3 className="section-title flex items-center gap-2">
          <Award size={20} />
          <span>Skills</span>
        </h3>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Domains & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="section-container">
        <h3 className="section-title flex items-center gap-2">
          <Languages size={20} />
          <span>Languages</span>
        </h3>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <Badge variant="outline">{lang.proficiency}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillsSection;
