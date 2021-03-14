import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Link to="/home">
          <Navbar.Brand>Routing App</Navbar.Brand>
        </Link>
        <div className="nav-links ml-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/home" className="nav-link">
                Home
              </Link>

              <Link to="shopping" className="nav-link">
                Shop
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
