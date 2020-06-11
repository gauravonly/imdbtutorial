import React from "react";
import "./App.css";
import MovieCard from "./MovieCard.js";
import ImdbHeader from "./ImdbHeader.js";
import PageNotFound from "./PageNotfound.js";
import Home from "./Home.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Actors from "./Actors";
import Awards from "./Awards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  // render={() => {
  //   return isLoggedIn ? (
  //     <Redirect to="/actors" component={Actors} />
  //   ) : (
  //     <Redirect to="/" component={Home} />
  //   );
  // }}

  render() {
    const { isLoggedIn } = this.state;
    console.log("isLoggedIn", isLoggedIn);
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/actors" component={Actors}></Route>
            <Route exact path="/awards/:id" component={Awards}></Route>
            <Redirect to="/pagenotfound" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
