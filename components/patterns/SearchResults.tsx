import React from "react";
import { cn } from "../ui/utils";
import { FileText, User, Building, ArrowRight, Search, Clock } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export type SearchResultType = "invoice" | "client" | "payor" | "operation";

export interface SearchResultItem {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  metadata?: string;
  status?: string;
  url?: string;
}

interface SearchResultsProps {
  results: SearchResultItem[];
  query: string;
  isLoading?: boolean;
  onSelect: (item: SearchResultItem) => void;
  className?: string;
}

const iconMap: Record<SearchResultType, React.ElementType> = {
  invoice: FileText,
  client: User,
  payor: Building,
  operation: Clock,
};

export function SearchResults({
  results,
  query,
  isLoading,
  onSelect,
  className,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="p-4 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 animate-pulse">
            <div className="h-10 w-10 bg-muted rounded-lg" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-3 bg-muted rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!results.length && query) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        <Search className="h-12 w-12 mx-auto mb-3 opacity-20" />
        <p>No results found for "{query}"</p>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        <p>Enter a search term...</p>
      </div>
    );
  }

  // Group results by type? Or just flat list. Flat list is better for global search.
  
  return (
    <ScrollArea className={cn("h-[400px]", className)}>
      <div className="p-2">
        <p className="text-xs font-medium text-muted-foreground mb-3 px-2 uppercase tracking-wider">
          Results ({results.length})
        </p>
        <div className="space-y-1">
          {results.map((item) => {
            const Icon = iconMap[item.type] || FileText;
            
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted border group-hover:bg-background transition-colors">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm truncate">{item.title}</span>
                    {item.status && (
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5 ml-2 shrink-0">
                        {item.status}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="truncate">{item.subtitle}</span>
                    {item.metadata && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                        <span className="shrink-0">{item.metadata}</span>
                      </>
                    )}
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </button>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}