"use client";
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

type ImageStackProps = {
  images: (string | StaticImageData)[];
  interval?: number;
};

const ImageStack: React.FC<ImageStackProps> = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const visibleImagesCount = 2;

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(changeImage);
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-xs tablet:max-w-md laptop:max-w-lg desktop:max-w-xl aspect-[1.58/1] mx-auto">
      {images.map((image, index) => {
        const positionOffset = (index - currentImageIndex + images.length) % images.length;
        const isVisible = positionOffset < visibleImagesCount;

        const scale = 1 - positionOffset * 0.05;
        const zIndex = images.length - positionOffset;
        const bottom = isVisible ? `-${positionOffset * 12}px` : `-${visibleImagesCount * 5}px`;
        const opacity = isVisible ? 1 : 0;

        return (
          <div
            key={`${image}-${index}`}
            className="absolute w-full h-full transition-all duration-500 ease-in-out"
            style={{
              left: '50%',
              transform: `translateX(-50%) scale(${scale})`,
              zIndex,
              bottom,
              opacity,
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              className="rounded-2xl object-cover"
              priority={index === currentImageIndex}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageStack;
