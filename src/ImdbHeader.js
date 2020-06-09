import React from "react";
import "./ImdbHeader.css";

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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Trailers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recommended
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Streaming
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Born Today
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies/Show
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                People
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
