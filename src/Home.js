import React from "react";
import "./App.css";
import MovieCard from "./MovieCard.js";
import ImdbHeader from "./ImdbHeader.js";
import Movie from "./Movie.js";
import Rating from "./Rating.js";
import star from "./star.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Actors from "./Actors";
import Awards from "./Awards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [
        {
          id: 1,
          addedToWatchList: false,
          name: "Starwars",
          poster:
            "https://cdn.vox-cdn.com/thumbor/f9dT1Qj9QBrKr9vrTHCcGejtCjY=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9427327/star_wars_poster.jpg",
          rating: 8,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          name: "Lord Of the Rings",
          addedToWatchList: false,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg",
          rating: 9,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          name: "Twilight",
          addedToWatchList: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg",
          rating: 7,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          name: "Troy",
          addedToWatchList: false,
          poster:
            "https://images.wolfgangsvault.com/m/xlarge/ZZZ060836-PO/troy-poster-may-14-2004.webp",
          rating: 4,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          name: "Looney Tunes",
          addedToWatchList: false,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/71pGumdHYQL._AC_SY741_.jpg",
          rating: 6,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }

  filteredArray = (mySearchArray, id) => {
    return mySearchArray.filter((value, index) => {
      if (value.id === id) {
        return value;
      }
    });
  };

  changeButtonState = (index, e) => {
    const { movieData } = this.state;
    // There are two ways to do update my state using setState(use any one of the way)

    // NUMBER 1 : USING destructuring and loop using map

    //This is the selected selectedMovieCard data
    const selectedMovieCard = this.filteredArray(movieData, index);
    // Since we cannot copy object directly we have to map over the movie data here in setState and if the selectedMovieCard.id
    // is equal to mappped movie Data then we would change the value and return the new changed array of movie data.
    // If we donot change movieData like this then re render wont happen as we cannot change value of and state value as discussed

    this.setState({
      movieData: movieData.map(el =>
        el.id === selectedMovieCard[0].id
          ? { ...el, addedToWatchList: !selectedMovieCard[0].addedToWatchList } //  here were are mutation the selected id moviecard data using destructuring and merge
          : el
      )
    });

    // NUMBER : 2 Using splice method available in array

    // Updating selectedMovieCard Object Value

    // Uncomment(updatedObj and this.setState method below) to use this method  2

    // let updatedObj = {
    //   ...selectedMovieCard[0],
    //   addedToWatchList: !selectedMovieCard[0].addedToWatchList
    // };

    // updated state value

    // this.setState({
    //   movieData: [
    //     ...movieData.slice(0, index - 1),
    //     updatedObj,
    //     ...movieData.slice(index)
    //   ]
    // });
  };

  resetFunction = () => {
    const { movieData } = this.state;
    this.setState({
      movieData: movieData.map(el => {
        return { ...el, addedToWatchList: false };
      })
    });
  };

  getAddRemoveButton = (index, addedToWatchList) => {
    // This function would return you the button Component with set index
    if (addedToWatchList) {
      return (
        <div
          className="remove-to"
          onClick={e => this.changeButtonState(index, e)}
        >
          -
        </div>
      );
    } else {
      return (
        <div className="add-to" onClick={e => this.changeButtonState(index, e)}>
          +
        </div>
      );
    }
  };

  render() {
    const { movieData } = this.state;
    return (
      <div className="App">
        <Movie
          movieData={movieData}
          filteredArray={this.filteredArray}
          changeButtonState={this.changeButtonState}
          resetFunction={this.resetFunction}
          getAddRemoveButton={this.getAddRemoveButton}
        />
      </div>
    );
  }
}

export default App;
