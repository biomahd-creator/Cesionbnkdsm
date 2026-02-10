import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface MasonryGridProps {
  children: React.ReactNode;
  columnsCountBreakPoints?: { [key: number]: number };
  gutter?: string;
}

export function MasonryGrid({
  children,
  columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 },
  gutter = "1rem",
}: MasonryGridProps) {
  return (
    <div className="w-full min-w-0">
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={gutter}>
          {children}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
