"use client";
import React from "react";

type TagSkeletonProps = {
  count?: number;
  variableWidths?: boolean;
};

const TagSkeleton: React.FC<TagSkeletonProps> = ({ count = 10, variableWidths = true }) => {
  const widths = variableWidths
    ? [80, 100, 80, 100, 75, 90,100, 80, 100, 75, 90].slice(0, count)
    : Array(count).fill(80);

  return (
    <div className="flex flex-wrap gap-2">
      {widths.map((width, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 rounded-[9999px] h-[30px] px-3 py-[6px]"
          style={{ width }}
        ></div>
      ))}
    </div>
  );
};

export default TagSkeleton;
