import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";

import Routes from "./Routes";

function App() {
  return (
    <Container className="App">
      <Navbar bg="light" collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to="/">SLS Notes</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/signup">
              <Nav.Link href="/signup">Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link href="/login">Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </Container>
  );
}

export default App;
