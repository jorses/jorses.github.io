
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Link } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "DataBench",
      description: "Thousands of monthly downloads. Modern benchmark for Question Answering over Tabular Data. Focus of the first part of my PhD thesis. It includes a large set of industry datasets and QA evaluation and diagnosis tools.",
      link: "https://huggingface.co/datasets/cardiffnlp/databench",
      type: "huggingface" 
    },
      {
      title: "DataBenchSPA",
      description: "Spanish version of DataBench. It includes a smaller set of industry datasets and QA evaluation and diagnosis tools.",
      link: "https://huggingface.co/datasets/SINAI/databenchSPA",
      type: "huggingface" 
    },

    {
      title: "ACL 2025 - SemEval Task 8: Question Answering over Tabular Data",
      description: "Planned and led this competition where over 300 participants from all over the world submitted solutions to the proposed challenge, including top companies and universities. 35 research papers were submitted for the task, one of the highest counts in the history of Semeval.",
      link: "https://www.codabench.org/competitions/3360/",
      type: "huggingface"
    }
  ];

  return (
    <div className="section-container">
      <h3 className="section-title flex items-center gap-2">
        <Github size={20} />
        <span>Projects</span>
      </h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{project.title}</h4>
                  <p className="text-sm">{project.description}</p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  {project.type === 'github' ? 
                    <Github size={20} /> : 
                    <Link size={20} />
                  }
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
