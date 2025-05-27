"use client";
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

type ImageStackProps = {
  images: (string | StaticImageData)[];
  interval?: number; // Time interval for image change (default is 3000ms)
};

const ImageStack: React.FC<ImageStackProps> = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const visibleImagesCount = 2; // Number of images to show behind the top one

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

        return (
          <Image
            key={`${image}-${index}`}
            src={image}
            alt={`Slide ${index}`}
            fill
            className={`aspect-[1.78/1] rounded-2xl absolute w-full max-w-[458px] transition-all duration-500 ease-in-out
              ${positionOffset === 0 ? 'transform scale-110 z-10 opacity-100' : 'opacity-80'}`}
            style={{
              left: '50%',
              transform: `translateX(-50%) scale(${1 - positionOffset * 0.06})`,
              zIndex: images.length - positionOffset,
              bottom: isVisible ? `-${positionOffset * 12}px` : `-${visibleImagesCount * 5}px`,
              opacity: isVisible ? 1 : 0,
              objectFit: "cover",
            }}
          
          />
        );
      })}
    </div>
  );
};

export default ImageStack;
