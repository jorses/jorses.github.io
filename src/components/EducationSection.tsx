
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "PhD in Artificial Intelligence",
      specialization: "Natural Language Processing",
      institution: "University of Cardiff | University of Jaén",
      duration: "2023-2026",
      description: `
Thesis: 'Tabular Reasoning Through Large Language Models'. 

Advisors: Jose Camacho Collados at University of Cardiff and Eugenio Martínez Cámara, Luis Alfonso Ureña López at University of Jaén.

Focused on modernizing the field of Tabular Reasoning by providing benchmarks and a new framework for analyzing tabular data structures in the context of NLP. See more in my publications and projects sections.

`
    },
    {
      degree: "MSc in Natural Language Processing",
      specialization: "",
      institution: "Universidad Nacional de Educación a Distancia (UNED)",
      duration: "2022 - 2023",
      description: "Graduated with distinctions, 9.1/10. MSc Thesis on Synthetic Data Generation for Multiple Choice Question Answering."
    },
    {
      degree: "Double Major in Computer Science and Mathematics",
      specialization: "Algorithms and Data Structures",
      institution: "Complutense University of Madrid",
      duration: "2014-2019",
      description: "Highly competitive program resulting in two four-years Bachelor degrees."
    }
  ];

  return (
    <div className="section-container">
      <h3 className="section-title flex items-center gap-2">
        <Book size={20} />
        <span>Education</span>
      </h3>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h4 className="font-medium">{edu.degree}</h4>
                  {edu.specialization && <p className="text-sm text-muted-foreground">{edu.specialization}</p>}
                  <p className="text-sm">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground">{edu.duration}</span>
              </div>
              <p className="text-sm whitespace-pre-line mt-2">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
