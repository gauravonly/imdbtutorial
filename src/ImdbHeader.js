import React from "react";
import "./ImdbHeader.css";
import { Link } from "react-router-dom";
// this is a funcitonal component
// export default function ImdbHeader() {
//   return <header>My Header </header>;
// }

// this is a className based component
export default class ImdbHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: "My Header"
    };
  }

  getClass = () => {
    const { headerText } = this.state;
    const lengthOfHeadertext = headerText.length;
    // const classes = ["class1", "class2"];
    // const newclass = `${classes[0]} class2`; // concatenation - template string
    return lengthOfHeadertext > 10 ? "class1" : "class2";
  };

  render() {
    const { headerText } = this.state;
    const myClass = this.getClass();

    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a href="https://www.imdb.com">
          <img
            className="logo"
            src="https://pbs.twimg.com/profile_images/976507090624589824/0x28al44_400x400.jpg"
            alt="imdb logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" target="_self">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/actors" target="_self">
                Actors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/awards" target="_self">
                Awards
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
