import React, { useState } from "react";
import "../Style/StarRating.css";

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starIndex) => {
    setSelectedStars(starIndex + 1);
  };

  const renderStar = (starIndex) => {
    return (
      <span
        key={starIndex}
        className={starIndex < selectedStars ? "star selected" : "star"}
        onClick={() => handleStarClick(starIndex)}
      >
        &#9733;
      </span>
    );
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => renderStar(i))}
    </div>
  );
};

export default StarRating;
