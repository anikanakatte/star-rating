import React, { useState } from "react";

const StarRating = ({ starCount }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-container">
      {[...Array(starCount)].map((star, index) => {
        index += 1;
        return (
          <button
            onClick={() => setRating(index)}
            className={index <= (hover || rating) ? "on" : "off"}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <p>The rating is {rating}</p>
    </div>
  );
};

export default StarRating;
