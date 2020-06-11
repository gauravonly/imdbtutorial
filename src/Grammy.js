import React from "react";

export default class Grammy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;
    console.log("pathname in grammy", location.pathname);
    return <div>Hey this is Grammy</div>;
  }
}
