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
  render() {
    const { headerText } = this.state;
    return <header>{headerText}</header>;
  }
}
