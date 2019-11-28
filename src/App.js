import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Table from "./AllBooks";

import Header from "./Header";
const url = "https://idon.dk/semesterprojekt/";

class App extends Component {
  state = {
    query: "",
    data: []
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    let filteredBooks = this.state.data.filter(book => {
      return (
        book.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
      );
    });
    this.setState({
      data: filteredBooks
    });
    console.log(this.state.query);
    console.log(this.state.data);
  };

  getData = () => {
    fetch(url + "api/book/allbooks")
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: responseData
        });
      });
  };

  filterArray = () => {
    let filteredBooks = this.state.data.filter(book => {
      return (
        book.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
      );
    });

    this.setState({
      data: filteredBooks
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
