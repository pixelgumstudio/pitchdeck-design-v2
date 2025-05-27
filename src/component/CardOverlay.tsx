"use client";
import React from "react";
import Link from "next/link";

type CardOverlayProps = {
  link: string;
};

export const CardOverlay: React.FC<CardOverlayProps> = ({ link }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-overlay">
      <Link
        href={link}
        target="_blank"
        className="p-4 rounded-3xl bg-white text-[#0b0b00] text-14 font-medium hover:text-green-500 hover:underline"
      >
        View Pitch Deck
      </Link>
    </div>
  );
};
