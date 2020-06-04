import React from "react";
import "./ImdbHeader.css";

// this is a funcitonal component
// export default function ImdbHeader() {
//   return <header>My Header </header>;
// }

// this is a class based component
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
    return lengthOfHeadertext > 10 ? "class2" : "class1";
  };

  render() {
    const { headerText } = this.state;
    const myClass = this.getClass();

    return <header className={myClass}>{headerText}</header>;
  }
}
