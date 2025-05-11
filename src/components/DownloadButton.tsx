
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const DownloadButton = () => {
  const printCV = () => {
    window.print();
  };

  return (
    <Button 
      onClick={printCV} 
      className="fixed bottom-4 right-4 shadow-md print:hidden no-print"
    >
      <Download className="mr-2 h-4 w-4" /> Download CV
    </Button>
  );
};

export default DownloadButton;
