import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleCardContent from "@/components/ui/CollapsibleCardContent";
import { BookOpen } from 'lucide-react';
import ShowMoreText from "@/components/ui/ShowMoreText";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Question Answering over Tabular Data with DataBench: A Large-Scale Empirical Evaluation of LLMs",
      journal: "International Conference on Computational Linguistics (LREC-COLING)",
      year: "2024",
      link: "https://aclanthology.org/2024.lrec-main.1179/",
      logo: "/logos/coling.jpg", // Updated path for production
      description: "This paper presents a comprehensive evaluation of large language models in question answering over tabular data using the DataBench benchmark."
    },
    {
      title: "Towards Quality Benchmarking in Question Answering over Tabular Data in Spanish",
      journal: "Revista de Procesamiento de Lenguaje Natural - SEPLN",
      year: "2024",
      link: "http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6617",
      logo: "/logos/sepln.png",
      description: "This study explores quality benchmarking for question answering over tabular data in Spanish, providing insights into model performance."
    }
  ];

  return (
    <div className="section-container max-w-4xl mx-auto mt-8">
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 w-full mb-2">
                {pub.logo && (
                  pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <img src={pub.logo} alt={pub.title + ' logo'} className="w-16 h-16 object-contain rounded bg-white border shrink-0 mt-1" />
                    </a>
                  ) : (
                    <img src={pub.logo} alt={pub.title + ' logo'} className="w-16 h-16 object-contain rounded bg-white border shrink-0 mt-1" />
                  )
                )}
                <div className="flex flex-col w-full">
                  <div className="flex flex-col md:flex-row md:justify-between w-full mb-2">
                    <h4 className="font-medium">{pub.title}</h4>
                    <span className="text-sm text-muted-foreground md:text-right">{pub.year}</span>
                  </div>
                  {pub.description.trim().split(/\n\s*\n/).length > 1 ? (
                    <div className="mt-3"><ShowMoreText text={pub.description} /></div>
                  ) : (
                    <p className="text-sm whitespace-pre-line mt-3">{pub.description}</p>
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

export default PublicationsSection;
