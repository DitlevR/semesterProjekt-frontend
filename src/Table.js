import React, { Component } from "react";
import MaterialTable from "material-table";
import App from "./App";
import PacmanLoader from "react-spinners/PacmanLoader";
const url = "https://idon.dk/semesterprojekt/";

export default class MaterialTableDemo extends Component {
  state = {
    columns: [
      { title: "Tile", field: "title", editable: "never" },
      { title: "description", field: "description", editable: "never" },
      {
        title: "pageNumber",
        field: "pageNumber",
        type: "numeric",
        editable: "never"
      },
      {
        title: "author",
        field: "author",
        editable: "never"
      },
      { title: "year", field: "year", editable: "never" },
      { title: "Status", field: "status", type: "boolean" }
    ],
    data: [],
    loading: true,
    override: `
      display: block;
      margin: 0 auto;
      border-color: red;
    `
  };

  componentDidMount() {
    fetch(url + "api/book/allbooks")
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          data: responseData,
          loading: false
        });
        console.log("state", this.state.data);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="sweet-loading">
          <PacmanLoader
            size="80"
            color="#6b5ce7"
            css={{ width: "260px !important", height: "130px !important" }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <MaterialTable
            title="Editable Example"
            columns={this.state.columns}
            data={this.state.data}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      this.setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                })
            }}
          />
          )
        </div>
      );
    }
  }
}
