import React, { Component } from "react";
import { Button } from "react-bootstrap";
const url = "https://idon.dk/semesterprojekt/";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { book: "hej", loading: true };
  }

  getBook = () => {
    fetch(url + "api/book/getbook/5")
      .then(response => response.json())
      .then(responsedata =>
        this.setState({ book: responsedata, loading: false })
      );
  };

  loanBook = () => {
    fetch(url + "api/book/loanbook/" + this.state.book.id).then(
      console.log("loan")
    );
  };

  componentDidMount() {
    this.getBook();
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          <ul>
            <li>{this.state.book.id}</li>
            <li>{this.state.book.title}</li>
            <li>{this.state.book.description}</li>
            <li>{this.state.book.pageNumber}</li>
            <li>{this.state.book.author}</li>
            <li>{}</li>
          </ul>
          <Button onClick={this.loanBook}>Lån denne Bog</Button>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default Book;
