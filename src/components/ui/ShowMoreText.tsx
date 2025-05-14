import React, { useState } from "react";

interface ShowMoreTextProps {
  text: string;
  initialLines?: number;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({ text, initialLines = 4 }) => {
  const paragraphs = text.trim().split(/\n\s*\n/);
  const [expanded, setExpanded] = useState(false);

  if (paragraphs.length <= 1) {
    return <p className="text-sm whitespace-pre-line">{text}</p>;
  }

  return (
    <div>
      {expanded ? (
        <p className="text-sm whitespace-pre-line">{text}</p>
      ) : (
        <>
          <p className="text-sm whitespace-pre-line">
            {paragraphs.slice(0, 1).join("\n\n")}
            {paragraphs.length > 1 && <span className="text-muted-foreground"> ...</span>}
          </p>
        </>
      )}
      {paragraphs.length > 1 && (
        <button
          className="mt-2 text-blue-600 hover:underline text-xs font-medium"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ShowMoreText;
