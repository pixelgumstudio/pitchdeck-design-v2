"use client";
import React from "react";
import { ImageCarousel } from "./ReactCardCarousel";

const images: string[] = [];
for (let i = 1; i <= 18; i++) {
  images.push(
    `https://firebasestorage.googleapis.com/v0/b/pptdesigner-9ccaf.appspot.com/o/websiteImages%2Fimage${i}.webp?alt=media&token=88b35bb5-e248-43e9-8e44-243f5da6ce40`
  );
}

const topImages: string[] = [...images.slice(0, 7), images[14], images[15]];
const bottomImages: string[] = [...images.slice(7, 14), images[16], images[17]];

const CardCarousel: React.FC = () => {
  return (
    <div className="max-w-full mx-auto bg-[#E7F6EF]">
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex-1">
          <ImageCarousel images={topImages} rtl={false} />
        </div>
        <div className="flex-1">
          <ImageCarousel images={bottomImages} rtl={true} />
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;