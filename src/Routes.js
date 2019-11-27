import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import App from "./App";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={App} />
      <Route exact path="/book" component={Book} />
    </Switch>
  </Router>
);
