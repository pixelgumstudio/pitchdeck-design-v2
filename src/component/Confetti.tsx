"use client";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const AddConfetti: React.FC = () => {
  const [confettiActive, setConfettiActive] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set window size on mount and on resize
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const startConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // Stop confetti after 2 seconds
  };

  return (
    <div>
      <button onClick={startConfetti}>Start Confetti</button>
      {confettiActive && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
    </div>
  );
};

export default AddConfetti;