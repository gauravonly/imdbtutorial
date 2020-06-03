import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard.js";
import ImdbHeader from "./ImdbHeader.js";

function App() {
  return (
    <div className="App">
      <ImdbHeader />
      <div className="movie-wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
