import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleCardContent from "@/components/ui/CollapsibleCardContent";
import { Briefcase } from 'lucide-react';
import ShowMoreText from "@/components/ui/ShowMoreText";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "Law Business Research",
      duration: "2025-Present",
      logo: "/logos/lbr.png", // Updated path for production
      description: ``    
    },
    {
      title: "Senior Data Scientist and Software Developer",
      company: "Graphext",
      duration: "2020-2025",
      logo: "/logos/graphext.png", // Updated path for production
      description: `
Developed and automated data analysis procedures within the platform, covering a range of use cases including natural language processing (e.g. topic modeling), churn prediction, lead scoring, and other predictive models. 
Enhanced graph visualization by leveraging RandomForest tree embeddings in a semi-supervised learning framework. 

Designed and implemented LLM-powered features, such as chat-to-data interfaces and custom code generation tools, enabling users to interact with the platform through natural language instead of code. These AI agents empowered users to perform any natively supported feature—from simple visual adjustments to complex workflows like topic modeling and predictive model deployment—without writing code.

Built and deployed scalable LLM-based functions for processing large datasets using customizable AI agents configured by the user. 
These solutions handled datasets with hundreds of millions of rows, utilizing parallelization, concurrency, and advanced prompting techniques. The AI agents could execute these functions directly, significantly streamlining the end-to-end data analysis workflow.`
    },
    {
      title: "Data Scientist and Software Developer",
      company: "Graphext",
      duration: "2018-2020",
      logo: "/logos/graphext.png", // Updated path for production
      description: `
Designed, developed, and maintained high-performance scraper applications within an Electron.js desktop environment, capable of collecting hundreds of millions of data points from social networks. Integrated proxy management and optimization systems to enhance speed, reliability, and bypass platform restrictions. 

Built robust data pipelines to handle large-scale data ingestion and output between external sources and the platform, ensuring fast, secure, and efficient data transfer and preprocessing. 

Architected and implemented a custom domain-specific language (DSL) for defining data processing pipelines, featuring static typing, validation mechanisms, and a compiler that transforms scripts into optimized execution trees for streamlined runtime performance. 

Developed dashboards and visualizations to analyze global target demographics by aggregating data from multiple online platforms, crafting insights and narratives to illustrate the interests of Catholic youth for Pope Francis.`
    },
    {
      title: "Data Analytics Intern",
      company: "Weplan Analytics",
      duration: "2017-2018",
      logo: "/logos/weplan.jpeg", // Updated path for production
      description: "Built predictive models to profile user behaviour from telecom data using MongoDB."
    }
  ];

  return (
    <div className="section-container max-w-4xl mx-auto mt-8">
      {/* Removed section title to avoid repetition with selector bar */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 w-full mb-2">
                {exp.logo && (
                  <img src={exp.logo} alt={exp.company + ' logo'} className="w-16 h-16 object-contain rounded bg-white border shrink-0 mt-1" />
                )}
                <div className="flex flex-col w-full">
                  <div className="flex flex-col md:flex-row md:justify-between w-full mb-2">
                    <h4 className="font-medium">{exp.title} | {exp.company}</h4>
                    <span className="text-sm text-muted-foreground md:text-right">{exp.duration}</span>
                  </div>
                  {exp.description.trim().split(/\n\s*\n/).length > 1 ? (
                    <div className="mt-3"><ShowMoreText text={exp.description} /></div>
                  ) : (
                    <p className="text-sm whitespace-pre-line mt-3">{exp.description}</p>
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

export default ExperienceSection;
