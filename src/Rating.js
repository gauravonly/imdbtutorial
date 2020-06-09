import React from "react";

export default function Rating(props) {
  const { rating, star } = props;
  return (
    <div className="rating">
      <img className="rating-icon" src={star} alt="rating" />
      {rating}
    </div>
  );
}
