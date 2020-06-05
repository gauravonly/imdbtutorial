import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard.js";
import ImdbHeader from "./ImdbHeader.js";
import "./MovieCard.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: {
        id: 1,
        addedToWatchList: false,
        name: "Starwars",
        poster:
          "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
        rating: 8,
        details:
          " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      addedToWatchList: false,
      isLoggedIn: true
    };
  }

  // changeButtonState = () => {
  //   console.log("reached");
  //   this.setState({
  //     movieData: {
  //       id: 1,
  //       name: "Starwars",
  //       poster:
  //         "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
  //       rating: 8,
  //       details:
  //         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //     }
  //   });
  // };

  changeButtonState = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("reached target", e, e.target);
    const { addedToWatchList } = this.state;
    console.log("addedToWatchList", addedToWatchList); //false
    this.setState({
      addedToWatchList: !addedToWatchList
    });
    console.log("addedToWatchList after change", this.state.addedToWatchList);
  };

  getAddRemoveButton = addedToWatchList => {
    if (addedToWatchList) {
      return (
        <button className="remove-to" onClick={this.changeButtonState}>
          Remove From WatchList
        </button>
      );
    } else {
      return (
        <button className="add-to" onClick={this.changeButtonState}>
          Add To WatchList
        </button>
      );
    }
  };

  render() {
    // function will rungain only if we change state using setState and setState is a defined fucntion is react
    const { isLoggedIn, movieData, addedToWatchList } = this.state;

    const { id, name, poster, rating, details } = movieData;
    console.log("movieData", movieData);

    const myButton = this.getAddRemoveButton(addedToWatchList);

    // const authComponent = () => {
    //   if (isLoggedIn) {
    //     return <button>Logout</button>;
    //   } else {
    //     return <button>Login</button>;
    //   }
    // };

    // const AuthButton = () => {
    //   switch (isLoggedIn) {
    //     case true:
    //       return <button>Logout</button>;
    //       break;
    //     case false:
    //       return <button>Login</button>;
    //       break;
    //   }
    // };

    // let AuthButton;
    // if (isLoggedIn) {
    //   AuthButton = <button>Logout</button>;
    // } else {
    //   AuthButton = <button>Login</button>;
    // }

    // if (isLoggedIn) {
    //   return <button>Logout</button>;
    // } else {
    //   return <button>Login</button>;
    // }

    return (
      <div className="App">
        <ImdbHeader />
        <div className="movie-wrapper">
          <div className="movie-card-container">
            <img src={poster} alt="movie poster" />
            {addedToWatchList && (
              <img
                src="./src/check.png"
                alt="check"
                style={{ width: "20px", height: "20px;" }}
              />
            )}
            {myButton}
            <div className="movie-title">{name}</div>
            <div className="movie-details">{details}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
