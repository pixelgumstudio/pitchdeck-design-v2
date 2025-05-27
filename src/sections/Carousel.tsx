"use client";
import { ImageCarousel } from "../component/ReactCarousel";

const images: string[] = [];
for (let i = 1; i <= 18; i++) {
  images.push(
    `https://firebasestorage.googleapis.com/v0/b/pptdesigner-9ccaf.appspot.com/o/websiteImages%2Fimage${i}.webp?alt=media&token=88b35bb5-e248-43e9-8e44-243f5da6ce40`
  );
}

// Separate into top and bottom arrays
const topImages: string[] = [...images.slice(0, 7), images[14], images[15]];
const bottomImages: string[] = [...images.slice(7, 14), images[16], images[17]];

const Carousel: React.FC = () => {
  return (
    <div className="bg-[#F2F1E8]">
      <div className="w-full laptop:max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col gap-5 tablet:gap-10 laptop:gap-[50px]">
          <ImageCarousel images={topImages} rtl={false} />
          <ImageCarousel images={bottomImages} rtl={true} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;