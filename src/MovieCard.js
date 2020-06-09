import React from "react";
import "./MovieCard.css";
import Rating from "./Rating.js";
import check from "./check.png";
import star from "./star.png";

export default function MovieCard(props) {
  const {
    id,
    name,
    poster,
    details,
    rating,
    addedToWatchList,
    getAddRemoveButton
  } = props;
  return (
    <div className="movie-card-container">
      <img className="poster" src={poster} alt="movie poster" />
      {addedToWatchList && (
        <img
          className="check-icon"
          src={check}
          alt="check"
          style={{ width: "20px", height: "20px" }}
        />
      )}
      {
        // here in getAddRemoveButton we would pass the id from lopped  movie and addedToWatchList value
      }

      {getAddRemoveButton(id, addedToWatchList)}
      <Rating rating={rating} star={star} />
      <div className="movie-title">{name}</div>
      <div className="movie-details">{details}</div>
    </div>
  );
}
