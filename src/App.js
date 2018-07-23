import React, { Component } from "react";
import { listBooks } from "./api";

class App extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    this.setState({
      books: await listBooks()
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Books!</h1>
        <ol>
          {this.state.books.map(book => {
            return <li key={book._id}>{book.title}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
