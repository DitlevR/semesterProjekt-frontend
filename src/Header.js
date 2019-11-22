import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

import { Nav, Navbar, Form, Button } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
