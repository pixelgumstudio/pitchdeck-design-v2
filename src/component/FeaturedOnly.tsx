"use client";
import { useState } from "react";
import LoadImage from "./LoadImage";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CardOverlay } from "./CardOverlay";
import Link from "next/link";
import { StaticImageData } from "next/image";

type FeaturedProps = {
  title: string;
  desc: string;
  image: string | StaticImageData;
  link: string;
};

const FeaturedOnly: React.FC<FeaturedProps> = ({ image, title, desc, link }) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full py-6 flex justify-center bg-[#F3F3F4] border border-[#F3F3F4] mb-7"
      >
        <LoadImage
          alt="Featured Images"
          src={typeof image === "string" ? image : image.src}
          height={undefined}
          style="w-full max-w-[407px] h-full max-h-[289px] mx-auto"
        />
        {hover && <CardOverlay link={link} />}
      </div>

      <Link
        target="_blank"
        href={link}
        className={`${
          hover ? "text-green-500 underline" : "text-[#000]"
        } hover:text-green-500 hover:underline text-20 font-bold tablet:text-32`}
      >
        {title}
      </Link>
      <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] font-normal">
        {desc}
      </p>
    </div>
  );
};

export default FeaturedOnly;
