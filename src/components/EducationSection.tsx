import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ShowMoreText from "@/components/ui/ShowMoreText";
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "PhD in Artificial Intelligence",
      specialization: "Natural Language Processing",
      institution: "University of Cardiff | University of Jaén",
      duration: "2023-2026",
      logo: "/logos/cardiff.png", // Example logo path
      description: `
Thesis: Tabular Reasoning Through Large Language Models. 

Advisors: Jose Camacho Collados at University of Cardiff and Eugenio Martínez Cámara, Luis Alfonso Ureña López at University of Jaén.

Focused on modernizing the field of Tabular Reasoning by providing benchmarks and a new framework for analyzing tabular data structures in the context of NLP. See more in my publications and projects sections.

`
    },
    {
      degree: "MSc in Natural Language Processing",
      specialization: "",
      institution: "UNED",
      duration: "2022 - 2023",
      logo: "/logos/uned.jpg", // Updated path for production
      description: "Graduated with distinctions, 9.1/10. MSc Thesis on Synthetic Data Generation for Multiple Choice Question Answering."
    },
    {
      degree: "Double Major in Computer Science and Mathematics",
      specialization: "Algorithms and Data Structures",
      institution: "UCM",
      duration: "2014-2019",
      logo: "/logos/ucm.jpg", // Updated path for production
      description: "Highly competitive program resulting in two four-years Bachelor degrees."
    }
  ];

  return (
    <div className="section-container max-w-4xl mx-auto mt-8 p-0 sm:p-0">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full mb-2">
                {edu.logo && (
                  <img src={edu.logo} alt={edu.institution + ' logo'} className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded bg-white border shrink-0 mt-1" />
                )}
                <div className="flex flex-col w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full mb-2">
                    <h4 className="font-medium text-base sm:text-lg">{edu.degree} | {edu.institution}</h4>
                    <span className="text-sm text-muted-foreground sm:text-right mt-1 sm:mt-0">{edu.duration}</span>
                  </div>
                  {edu.description.trim().split(/\n\s*\n/).length > 1 ? (
                    <div className="mt-2 sm:mt-3"><ShowMoreText text={edu.description} /></div>
                  ) : (
                    <p className="text-sm whitespace-pre-line mt-2 sm:mt-3">{edu.description}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
