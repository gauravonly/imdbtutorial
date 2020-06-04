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
      movieDetails: [
        {
          id: 1,
          name: "Starwars",
          poster:
            "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
          rating: 8,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          name: "Lord Of the Rings",
          poster:
            "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
          rating: 9,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          name: "Twilight",
          poster:
            "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
          rating: 7,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          name: "Troy",
          poster:
            "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
          rating: 4,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          name: "Loney Tunes",
          poster:
            "https://image.shutterstock.com/image-photo/tokyo-japan-feb-19-2017-260nw-612277085.jpg",
          rating: 6,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ],
      isLoggedIn: true
    };
  }

  render() {
    const { movieDetails, isLoggedIn } = this.state;

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
          {movieDetails.map((movieData, index) => {
            const { id, name, poster, rating, details } = movieData;
            return (
              <div className="movie-card-container">
                <img src={poster} alt="movie poster" />
                <div>{name}</div>
                <div>{details}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
