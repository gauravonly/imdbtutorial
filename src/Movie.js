import React from "react";
import "./Movie.css";
import MovieCard from "./MovieCard.js";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true
    };
    console.log("contructor called");
  }
  componentWillMount() {
    console.log("componentWillMount called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate called", this.state, nextState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //always return boolean value
    console.log("shouldComponentUpdate called", this.state, nextState);
    // if (
    //   nextProps.movieData[3].addedToWatchList !==
    //   this.props.movieData[3].addedToWatchList
    // ) {
    //   return true;
    // }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called", this.state, prevState);
  }

  changeButtonState = () => {
    const { buttonState } = this.state;
    this.setState({
      buttonState: !buttonState
    });
  };

  render() {
    console.log("render called");
    const {
      movieData,
      filteredArray,
      changeButtonState,
      resetFunction,
      getAddRemoveButton
    } = this.props;

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
}
