import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface OptimizedCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Memoized card component for better performance
export const OptimizedCard = memo(
  ({ children, className, style }: OptimizedCardProps) => {
    return (
      <div
        className={cn("rank-card", className)}
        style={{
          contain: "layout style paint",
          willChange: "transform",
          transform: "translateZ(0)",
          ...style,
        }}
      >
        {children}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison to prevent unnecessary re-renders
    return (
      prevProps.className === nextProps.className &&
      prevProps.style === nextProps.style &&
      prevProps.children === nextProps.children
    );
  }
);

OptimizedCard.displayName = "OptimizedCard";
