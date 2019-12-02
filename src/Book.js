import React, { Component } from "react";
import { Button } from "react-bootstrap";
const url = "https://idon.dk/semesterprojekt/";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { book: "hej", loading: true };
  }

  getBook = () => {
    fetch(url + "api/book/getbook/6")
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
      const isAvailable = this.state.book.status;
      let status;
      console.log(isAvailable);
      if (isAvailable) {
        status = <Button onClick={this.loanBook}>Lån denne Bog</Button>;
      } else {
        status = <p>Book is loaned</p>;
      }
      console.log({ status });
      return (
        <div className="container">
          <ul>
            <li>{this.state.book.id}</li>
            <li>{this.state.book.title}</li>
            <li>{this.state.book.description}</li>
            <li>{this.state.book.pageNumber}</li>
            <li>{this.state.book.author}</li>
            <h1>{status}</h1>
          </ul>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default Book;
