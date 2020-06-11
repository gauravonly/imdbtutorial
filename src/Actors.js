import React from "react";
import axios from "axios";

export default class Actors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {}

  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(responseFromFetch => {
        console.log("responseFromFetch", responseFromFetch);
        return responseFromFetch.json();
      })
      .then(result => {
        this.setState({
          posts: result
        });
      });
  };

  getData2 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(responseFromFetch => {
        return responseFromFetch.json();
      })
      .then(result => {
        this.setState({
          posts: result
        });
      });
  };

  render() {
    const { posts } = this.state;
    console.log("posts", posts);
    return (
      <>
        <button onClick={this.getData}>get Data</button>
        <ul>
          {posts.length === 0 && "No data"}

          {posts &&
            posts.map((val, id) => {
              return (
                <li key={val.id}>
                  <div style={{ fontWeight: 900 }}>{val.title}</div>
                  <div>{val.body}</div>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}
