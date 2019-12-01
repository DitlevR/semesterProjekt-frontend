import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./Routes";
import { Nav, Navbar } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Book">Book</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default Header;
