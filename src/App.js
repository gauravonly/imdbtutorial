import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard.js";
import ImdbHeader from "./ImdbHeader.js";
import "./MovieCard.css";
import check from "./check.png";
import star from "./star.png";
import MyComp from "./MyComp";
import MyChild from "./MyChild";

class App extends React.Component {
  constructor() {
    super();
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
            "https://cdn.vox-cdn.com/thumbor/f9dT1Qj9QBrKr9vrTHCcGejtCjY=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9427327/star_wars_poster.jpg",
          rating: 9,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          name: "Twilight",
          addedToWatchList: false,
          poster:
            "https://cdn.vox-cdn.com/thumbor/f9dT1Qj9QBrKr9vrTHCcGejtCjY=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9427327/star_wars_poster.jpg",
          rating: 7,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          name: "Troy",
          addedToWatchList: false,
          poster:
            "https://cdn.vox-cdn.com/thumbor/f9dT1Qj9QBrKr9vrTHCcGejtCjY=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9427327/star_wars_poster.jpg",
          rating: 4,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          name: "Loney Tunes",
          addedToWatchList: false,
          poster:
            "https://cdn.vox-cdn.com/thumbor/f9dT1Qj9QBrKr9vrTHCcGejtCjY=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9427327/star_wars_poster.jpg",
          rating: 6,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ],
      isLoggedIn: true
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

  newFunc = name => {
    console.log("called from child", name);
  };

  render() {
    // function will rungain only if we change state using setState and setState is a defined fucntion is react
    const { isLoggedIn, movieData, addedToWatchList } = this.state;

    console.log("movieData", movieData);

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
        <MyComp
          detail="my comp Component details"
          details2="this is detail 2"
          id="2"
          color="red"
          movieData={movieData}
          newFunc={this.newFunc}
        >
          <MyChild />
        </MyComp>
        <ImdbHeader />
        <div className="movie-wrapper">
          {movieData.map((movie, index) => {
            const {
              id,
              name,
              poster,
              rating,
              details,
              addedToWatchList
            } = movie;
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

                {this.getAddRemoveButton(id, addedToWatchList)}
                <div className="rating">
                  <img className="rating-icon" src={star} alt="rating" />
                  {rating}
                </div>
                <div className="movie-title">{name}</div>
                <div className="movie-details">{details}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
