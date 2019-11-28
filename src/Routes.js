import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import AllBooks from "./AllBooks";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={AllBooks} />
      <Route exact path="/book" component={Book} />
    </Switch>
  </Router>
);
