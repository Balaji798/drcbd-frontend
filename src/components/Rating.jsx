import React from "react";
import { TbStarFilled, TbStarHalfFilled, TbStar } from "react-icons/tb";

const Rating = ({ userReviews }) => {
  // Check if userReviews is not empty
  if (userReviews.length === 0) {
    return null; // or return a default state/message
  }

  const totalRating = userReviews.reduce((sum, item) => sum + item.rating, 0);
  const averageRating = totalRating / userReviews.length;

  // Check if averageRating is a valid number
  if (isNaN(averageRating) || !isFinite(averageRating)) {
    return null; // or return a default state/message
  }

  const renderStars = () => {
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 !== 0;
    const stars = Array.from({ length: 5 }, (_, index) => {
      if (index < fullStars) {
        return <TbStarFilled key={index} size={25}/>;
      } else if (index === fullStars && hasHalfStar) {
        return <TbStarHalfFilled key={`${fullStars}-half`} size={25}/>;
      } else {
        return (
          <TbStar key={`${fullStars + (hasHalfStar ? 1 : 0) + index}-empty`} size={25}/>
        );
      }
    });

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
