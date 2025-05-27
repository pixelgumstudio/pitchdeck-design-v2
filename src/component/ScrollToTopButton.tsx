"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="animate-bounce fixed bottom-5 right-5 z-50"
          aria-label="Scroll to top"
        >
          <Image
            alt="Back to top"
            src="/assets/circle-up-solid.svg"
            width={80} height={80}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;