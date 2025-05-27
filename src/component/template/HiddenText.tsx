"use client";
import { useState } from "react";

type HiddenTextProps = {
  text: string;
  maxLength: number;
};

const HiddenText: React.FC<HiddenTextProps> = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText((prev) => !prev);
  };

  if (!text) return null;

  return (
    <div>
      {showFullText ? (
        <div>
          {text}
          <button
            className="text-[#21AB68] font-medium block"
            onClick={toggleTextVisibility}
            type="button"
          >
            Read less
          </button>
        </div>
      ) : (
        <div>
          {text.slice(0, maxLength)}
          {text.length > maxLength && (
            <button
              className="text-[#21AB68] font-medium block"
              onClick={toggleTextVisibility}
              type="button"
            >
              Read more
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HiddenText;