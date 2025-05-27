"use client"
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

type StarRatingProps = {
  totalStars: number;
};

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleMouseOver = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (starIndex: number) => {
    setRating(starIndex);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
            className="bg-transparent border-none p-0 m-0 cursor-pointer"
          >
            <FaStar
              className="star"
              color={starValue <= (hoverRating || rating) ? "#FFD703" : "#E4E5E9"}
              size={24}
            />
          </button>
        );
      })}
      {/* <p>{rating} out of {totalStars} stars</p> */}
    </div>
  );
};

export default StarRating;