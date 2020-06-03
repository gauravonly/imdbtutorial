import React from "react";
import "./MovieCard.css";

export default function MovieCard() {
  return (
    <div className="movie-card-container">
      <img
        src="https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg"
        alt="movie poster"
      />
      <div>Star Wars</div>
      <div>A famous movie about space exploration and adventure </div>
    </div>
  );
}
