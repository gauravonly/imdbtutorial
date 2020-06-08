import React from "react";

export default class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gaurav"
    };
  }
  render() {
    console.log("MyComp props", this.props);
    const { newFunc } = this.props;
    const { name } = this.state;
    return (
      <div>
        <button onClick={() => newFunc(name)}></button>
        {this.props.children}
      </div>
    );
  }
}
