import React from "react";
import { Link, Route } from "react-router-dom";
import Grammy from "./Grammy";
import Oscars from "./Oscars";

export default class Awards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this.props", this.props);
    const { location, match } = this.props;
    const { pathname } = location;
    const movies = [{ id: "1", name: "Movie1" }, { id: "2", name: "Movie2" }];
    return (
      <>
        <div>Awards Component is common</div>
        <ul>
          {movies.map((val, id) => (
            <li key={val.id}>
              <Link to={`/awards/${id}`}>{val.name}</Link>
            </li>
          ))}
        </ul>

        <Route path={"/awards/:movieid"} component={Grammy} />
      </>
    );
  }
}
