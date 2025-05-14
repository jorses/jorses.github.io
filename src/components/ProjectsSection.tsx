import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleCardContent from "@/components/ui/CollapsibleCardContent";
import { Github, Link } from 'lucide-react';
import ShowMoreText from "@/components/ui/ShowMoreText";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DataBench",
      description: "Thousands of monthly downloads. Modern benchmark for Question Answering over Tabular Data. Focus of the first part of my PhD thesis. It includes a large set of industry datasets and QA evaluation and diagnosis tools.",
      link: "https://huggingface.co/datasets/cardiffnlp/databench",
      type: "huggingface",
      duration: "2020 - Present",
      logo: "/logos/huggingface.png"
    },
    {
      title: "DataBenchSPA",
      description: "Spanish version of DataBench. It includes a smaller set of industry datasets and QA evaluation and diagnosis tools.",
      link: "https://huggingface.co/datasets/SINAI/databenchSPA",
      type: "huggingface",
      duration: "2021 - Present",
      logo: "/logos/huggingface.png"
    },
    {
      title: "ACL 2025 - SemEval Task 8: Question Answering over Tabular Data",
      description: "Planned and led this competition where over 300 participants from all over the world submitted solutions to the proposed challenge, including top companies and universities. 35 research papers were submitted for the task, one of the highest counts in the history of Semeval.",
      link: "https://www.codabench.org/competitions/3360/",
      type: "huggingface",
      duration: "2025",
      logo: "/logos/acl.jpg"
    }
  ];

  return (
    <div className="section-container max-w-4xl mx-auto mt-8">
      {/* Removed section title to avoid repetition with selector bar */}
      <div className="space-y-4">
        {projects.map((proj, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 w-full mb-2">
                {proj.logo && (
                  proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer">
                      <img src={proj.logo} alt={proj.title + ' logo'} className="w-16 h-16 object-contain rounded bg-white border shrink-0 mt-1" />
                    </a>
                  ) : (
                    <img src={proj.logo} alt={proj.title + ' logo'} className="w-16 h-16 object-contain rounded bg-white border shrink-0 mt-1" />
                  )
                )}
                <div className="flex flex-col w-full">
                  <div className="flex flex-col md:flex-row md:justify-between w-full mb-2">
                    <h4 className="font-medium">{proj.title}</h4>
                    <span className="text-sm text-muted-foreground md:text-right">{proj.duration}</span>
                  </div>
                  {proj.description.trim().split(/\n\s*\n/).length > 1 ? (
                    <div className="mt-3"><ShowMoreText text={proj.description} /></div>
                  ) : (
                    <p className="text-sm whitespace-pre-line mt-3">{proj.description}</p>
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

export default ProjectsSection;
