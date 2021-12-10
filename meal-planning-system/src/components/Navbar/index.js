import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
  <LinkContainer to="/">
    <Navbar.Brand href="#home">
    MealPrepPro
    </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/">
        <Nav.Link href="#home">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link href="#link">Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
        <Nav.Link href="#link">Register</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default AppNavbar;
