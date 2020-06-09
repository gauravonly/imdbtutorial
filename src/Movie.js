import React from "react";
import "./Movie.css";
import MovieCard from "./MovieCard.js";

export default function Movie(props) {
  const {
    movieData,
    filteredArray,
    changeButtonState,
    resetFunction,
    getAddRemoveButton
  } = props;

  console.log("movieData", movieData);

  return (
    <div className="movie-wrapper">
      <button className="resetButton" onClick={resetFunction}>
        Reset Watchlist
      </button>
      {movieData.map((movie, index) => {
        const { id, name, poster, rating, details, addedToWatchList } = movie;
        return (
          <MovieCard
            id={id}
            name={name}
            poster={poster}
            details={details}
            rating={rating}
            addedToWatchList={addedToWatchList}
            getAddRemoveButton={getAddRemoveButton}
          />
        );
      })}
    </div>
  );
}
