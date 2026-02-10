import { useEffect, useRef } from "react";

interface LiveRegionProps {
  message: string;
  politeness?: "polite" | "assertive";
  clearDelay?: number;
}

export function LiveRegion({ 
  message, 
  politeness = "polite",
  clearDelay = 3000 
}: LiveRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && regionRef.current) {
      regionRef.current.textContent = message;
      
      const timer = setTimeout(() => {
        if (regionRef.current) {
          regionRef.current.textContent = "";
        }
      }, clearDelay);

      return () => clearTimeout(timer);
    }
  }, [message, clearDelay]);

  return (
    <div
      ref={regionRef}
      role={politeness === "assertive" ? "alert" : "status"}
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    />
  );
}

// Hook para usar live regions
export function useLiveRegion() {
  const announce = (message: string, politeness: "polite" | "assertive" = "polite") => {
    const region = document.getElementById(`live-region-${politeness}`);
    if (region) {
      region.textContent = message;
      setTimeout(() => {
        region.textContent = "";
      }, 3000);
    }
  };

  return { announce };
}
