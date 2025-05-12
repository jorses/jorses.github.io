
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Question Answering over Tabular Data with DataBench: A Large-Scale Empirical Evaluation of LLMs",
      journal: "International Conference on Computational Linguistics (LREC-COLING)",
      year: "2024",
      link: "https://aclanthology.org/2024.lrec-main.1179/"
    },
    {
      title: "Towards Quality Benchmarking in Question Answering over Tabular Data in Spanish",
      journal: "Revista de Procesamiento de Lenguaje Natural - SEPLN",
      year: "2024",
      link: "http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6617"
    }
  ];

  return (
    <div className="section-container">
      <h3 className="section-title flex items-center gap-2">
        <FileText size={20} />
        <span>Papers</span>
      </h3>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h4 className="font-medium">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {pub.title}
                </a>
              </h4>
              <p className="text-sm text-muted-foreground">{pub.journal}, {pub.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;
