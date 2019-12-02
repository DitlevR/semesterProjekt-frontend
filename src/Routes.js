import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import AllBooks from "./AllBooks";
import Register from "./Register";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={AllBooks} />
      <Route exact path="/book" component={Book} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);
