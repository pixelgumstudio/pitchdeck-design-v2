"use client";
import Image, { StaticImageData } from "next/image";
import Skeleton from "./Skeleton";
import React from "react";

type LoadImageProps = {
  alt: string;
  src?: string | StaticImageData;
  style?: string;
  height?: number;
  width?: number;
};

const LoadImage: React.FC<LoadImageProps> = ({
  alt,
  src,
  style = "",
  height = 100,
}) => {
  const isValidSrc =
    typeof src === "string" ? src.trim() !== "" : Boolean(src);

  return (
    <Skeleton height={height}>
      <div className={`relative w-full ${style}`}>
        {isValidSrc && (
        <Image
  alt={alt}
  src={src!}
  fill
  style={{ objectFit: "cover" }}
  placeholder="blur"
  blurDataURL="/assets/LoadingImage.webp"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full h-full"
  unoptimized
/>
        )}
      </div>
    </Skeleton>
  );
};

export default LoadImage;
