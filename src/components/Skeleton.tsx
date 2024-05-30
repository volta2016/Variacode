// Skeleton.tsx
import React from "react";
import "../styles/skeleton.css";

interface SkeletonProps {
  count: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ count }) => {
  return (
    <div className="skeleton-wrapper">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-text" />
          <div className="skeleton-text" />
        </div>
      ))}
    </div>
  );
};
