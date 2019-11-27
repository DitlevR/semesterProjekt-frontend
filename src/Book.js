import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { book: "hej" };
  }

  getBook = () => {
    fetch().then(res => this.setState({ book: res.data }));
  };

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.book.title}</li>
          <li>{this.state.book.author}</li>
        </ul>
        <Button>Lån denne Bog</Button>
      </div>
    );
  }
}

export default Book;
