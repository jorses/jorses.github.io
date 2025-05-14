import React from "react";
import { CardContent } from "@/components/ui/card";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";

interface CollapsibleCardContentProps {
    label?: string; // Notion-style label for the toggle
    children: React.ReactNode;
    className?: string;
}

const CollapsibleCardContent: React.FC<CollapsibleCardContentProps> = ({
    label = "Details", // Default label for the toggle
    children,
    className,
}) => {
    return (
        <CardContent className={`pt-6 ${className || ""}`}>
            <Collapsible defaultOpen={false}>
                <CollapsibleTrigger asChild>
                    <button
                        type="button"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <span className="inline-block transition-transform group-data-[state=open]:rotate-90">
                            ▶
                        </span>
                        <span>{label}</span>
                    </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 mt-2">
                    {children}
                </CollapsibleContent>
            </Collapsible>
        </CardContent>
    );
};

export default CollapsibleCardContent;
