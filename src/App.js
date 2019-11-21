import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
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
    this.filterArray();
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
    var searchString = this.state.query;
    var responseData = this.state.data;
    if (searchString.length > 0) {
      // console.log(responseData[i].name);
      responseData = responseData.filter(l => {
        console.log(l.name.toLowerCase().match(searchString));
      });
    }
  };

  componentWillMount() {
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
          <table>
            <thead>
              <th>Titel</th>
              <th>Beskrivelse</th>
              <th>Antal sider</th>
              <th>Forfatter</th>
            </thead>

            {this.state.data.map((book, i) => {
              return (
                <div key={i}>
                  <tr>{book.title}</tr>
                  <tr>{book.description}</tr>
                  <tr>{book.pageNumber}</tr>
                  <tr>{book.author}</tr>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
