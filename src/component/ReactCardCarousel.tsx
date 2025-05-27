"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImageCarouselProps = {
  images: string[];
  rtl?: boolean;
};

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, rtl = false }) => {
  const [carouselSpeed, setCarouselSpeed] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      // Adjust speed based on screen width
      const screenWidth = window.innerWidth;
      const newSpeed = screenWidth < 600 ? 2000 : 2000;
      setCarouselSpeed(newSpeed);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    rtl: rtl,
    infinite: true,
    // lazyLoad: false, // Removed or change to "ondemand" or "progressive" if needed
    initialSlide: 0,
    speed: carouselSpeed,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: carouselSpeed,
    cssEase: "linear",
    className: "center",
    centerMode: false,
    pauseOnHover: false,
  };

  return (
    <div className="flex-1 h-fit">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full mx-auto"
            style={{ margin: "0 10px" }}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={400}
              height={300}
              className="w-full aspect-[16/12] object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};