import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, Component } from "react";
import { Table } from "react-bootstrap";
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
        console.log(responseData);
        this.setState({
          data: responseData
        });
        console.log("state", this.state.data);
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
      <div className="searchForm">
        <form>
          <input
            type="text"
            id="filter"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </form>
        <div>
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Titel</th>
                <th>Beskrivelse</th>
                <th>Antal sider</th>
                <th>Forfatter</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((book, i) => {
                return (
                  <tr key={i}>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>{book.pageNumber}</td>
                    <td>{book.author}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
